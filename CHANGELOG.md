# Changelog

All notable changes to `epsilver-cei` are documented here.

## [1.0.9] - 2026-03-10
### Added
- GovTrack legislative data integration for political figures
- Ideology percentile mapped to Justice/Tradition axes (roll-call vote analysis)
- Leadership percentile mapped to Establishment axis
- Strong/extreme ideology thresholds mapped to Conflict and Rigidity axes
- Party affiliation fallback signal when no roll-call ideology score is available
- Political occupation detection gates GovTrack lookups (politicians, senators, judges, activists, etc.)
- GovTrack fetch runs in parallel with image resolution for faster pipeline execution

## [1.0.8] - 2026-03-10
### Changed
- Internal patch release

## [1.0.7] - 2026-03-09
### Changed
- Refined Normie classifier: occupation bucketing, confidence floor, wider neutral threshold

## [1.0.6] - 2026-03-09
### Added
- Voting rights terms added to Justice axis (J1 cluster)

## [1.0.5] - 2026-03-09
### Fixed
- False-positive keyword matching corrected with word boundary regex

## [1.0.4] - 2026-03-09
### Added
- Normie lean classifier with threshold logic
- JD1/TD1 dampeners to reduce over-scoring on ambiguous signals

## [1.0.3] - 2026-03-07
### Fixed
- npx bin name corrected

## [1.0.2] - 2026-03-07
### Changed
- README updates

## [1.0.1] - 2026-03-07
### Changed
- README and initial documentation

## [1.0.0] - 2026-03-07
### Added
- Initial release
- Wikipedia lead + infobox scoring pipeline
- Five-axis CEI signal wheel (Establishment, Justice, Tradition, Conflict, Rigidity)
- Heuristic keyword clustering across three scoring passes
- Confidence scoring and status derivation
- Public-figure fallback and salience-term normalization
- Caching layer with configurable TTL
