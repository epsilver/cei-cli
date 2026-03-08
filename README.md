# cei-cli

Score any public figure on the **Cultural Extremity Index** — a deterministic five-axis ideology profiler powered by Wikipedia.

No sign-up. No API keys. Just a name.

---

## Requirements

You need **Node.js** installed. If you don't have it:

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version and install it
3. Restart your terminal

That's it.

---

## Usage

**Option 1 — Run once without installing:**

```
npx epsilver-cei "Name Here"
```

**Option 2 — Install globally and use anytime:**

```
npm install -g epsilver-cei
```

Then just:

```
cei "Name Here"
```

**Examples:**

```
cei "Noam Chomsky"
cei "Jordan Peterson"
cei "Taylor Swift" --first
```

`--first` skips the search result selector and picks automatically.

---

## What it does

Fetches the Wikipedia article for the person, runs it through a heuristic keyword scoring engine, and outputs a **CEI score** across five axes:

| Axis | What it measures |
|---|---|
| **Establishment** | Alignment with institutional power |
| **Justice** | Emphasis on rights and equity |
| **Tradition** | Nationalism and heritage framing |
| **Conflict** | Tolerance for confrontation |
| **Rigidity** | Absolutism and rejection of compromise |

The final **CEI score** (0–100) reflects overall ideological deviation from center. **Primary Lean** is either `Woke` (progressive) or `Chud` (reactionary).

---

## No LLMs. No black boxes.

All scoring is deterministic keyword matching. Same input always produces the same output. You can read exactly how it works at [culturalextremityindex.com](https://culturalextremityindex.com).

---

## Links

- Website: [culturalextremityindex.com](https://culturalextremityindex.com)
- npm: [npmjs.com/package/epsilver-cei](https://www.npmjs.com/package/epsilver-cei)
- Source: [github.com/epsilver/cei-cli](https://github.com/epsilver/cei-cli)
