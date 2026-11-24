// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
// Writes one original line of weather forecast (134 characters) for the
// invented city of Mizzlewick to /output/entry.txt: light rain, buses warm
// and on time, and every traffic light green just for the commuter — a
// small, smiling twist on an ordinary grey morning. Deterministic: two runs
// produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Mizzlewick: light rain all morning, buses warm and on time, and every " +
  "traffic light green just for you — the commute gods are smiling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
