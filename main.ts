// One Line, Big Laugh — entry program (u-coral-404-one-line-big-laugh-328fb857)
//
// Writes a single funny line (<= 200 characters) to /output/entry.txt,
// deterministically: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The winning line: a setup that promises a complaint, then a turn that
// reframes the bad thing as progress — the punchline lands on a therapy
// term ("set a boundary") turned back on the therapist herself.
const LINE =
  "My therapist ghosted me, which honestly felt like progress: she finally set a boundary.";

const OUT = "/output/entry.txt";

// Gate check, mirroring the sealed scorer: 1-200 characters, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  console.error(`entry line is ${chars} characters, must be 1-200`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry line is only whitespace");
  process.exit(1);
}
const bytes = Buffer.byteLength(LINE, "utf8");
if (bytes > 200) {
  console.error(`entry line is ${bytes} bytes, must be <= 200 bytes`);
  process.exit(1);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${chars} characters (${bytes} bytes) to ${OUT}`);
