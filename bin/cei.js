#!/usr/bin/env node
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { DEFAULTS } from "../lib/config.js";
import { wikiSearch } from "../lib/wiki.js";
import { runPipeline } from "../lib/pipeline.js";
import { printPreview, printSearchResults } from "../lib/cli.js";

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") { args.help  = true; continue; }
    if (a === "--first" || a === "-f") { args.first = true; continue; }
    if (a.startsWith("--")) {
      const k = a.slice(2);
      const v = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true;
      args[k] = v;
    } else {
      args._.push(a);
    }
  }
  return args;
}

function cfgFromArgs(args) {
  return {
    ...DEFAULTS,
    cacheDir:  args["cache-dir"]  ? String(args["cache-dir"])  : DEFAULTS.cacheDir,
    sleepMs:   args["sleep-ms"]   ? Number(args["sleep-ms"])   : DEFAULTS.sleepMs,
    userAgent: args["user-agent"] ? String(args["user-agent"]) : DEFAULTS.userAgent
  };
}

function print(s = "") { output.write(String(s) + "\n"); }

function help() {
  print("cei - Epsilver Cultural Extremity Index");
  print("");
  print("Usage:");
  print("  npx epsilver-cei \"Name\" [--first]");
  print("");
  print("  --first, -f     Auto-select the first search result");
  print("  --help, -h      Show this help");
  print("");
  print("Examples:");
  print("  npx epsilver-cei \"Taylor Swift\"");
  print("  npx epsilver-cei \"Noam Chomsky\" --first");
}

async function chooseResult(results, autoFirst) {
  if (!results.length) throw new Error("No results.");
  printSearchResults(results);

  if (autoFirst) return results[0].title;

  const rl = readline.createInterface({ input, output });
  const ans = await rl.question("Select [1-3] (default 1): ");
  rl.close();

  const k = ans.trim() === "" ? 1 : Number(ans.trim());
  if (![1, 2, 3].includes(k)) return results[0].title;
  return results[k - 1].title;
}

async function main() {
  const args = parseArgs(process.argv);
  const cfg  = cfgFromArgs(args);

  if (args.help || !args._.length) { help(); process.exit(args._.length ? 0 : 1); }

  const query = args._.join(" ").trim();

  try {
    const results  = await wikiSearch(query, cfg);
    const title    = await chooseResult(results, args.first);
    const pipeline = await runPipeline(title, cfg);
    printPreview(pipeline);
  } catch (e) {
    console.error("error:", e?.message || e);
    process.exit(1);
  }
}

main();
