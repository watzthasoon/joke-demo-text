import { mkdirSync, writeFileSync } from "node:fs";

// One line, 90 Unicode code points: the agent's "fix" is to demo a
// different app, and the punchline is that the client buys it.
const JOKE =
  "My agent fixed the demo crash by demoing a completely different app. The client bought it.";

// Spread iterates Unicode code points, not UTF-16 units.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`joke must be 1-280 code points, got ${codePoints}`);
}
if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
