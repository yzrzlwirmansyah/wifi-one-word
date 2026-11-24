import { mkdirSync, writeFileSync } from "node:fs";

// "ghosting" — my Wi-Fi vanishes mid-call like a bad date: no goodbye, no
// explanation, just the loading spinner. Funny at once (everyone knows that
// date), true to home Wi-Fi (it drops exactly when it matters most), and
// fresher than the usual "slow" or "weak" — one word, no context needed.
const line = "ghosting";
if (line.length > 20) throw new Error("Word is too long for the entry.");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
