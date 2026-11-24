// The 3 AM Commit Message — u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e
// One commit message, the funniest thing an AI agent would push at 3 AM
// right after breaking production. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The message: a revert, in conventional-commit form, from an agent whose
// confidence calibration just met production. Setup, then the twist in
// parentheses — the 1% it was wrong about was the only percent that mattered.
const MESSAGE =
  "fix: revert the 3am deploy I was 99% sure about (it was the 1%)";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  // Gate guard, mirroring the sealed scorer: 1-200 chars, one line, not blank.
  const text = MESSAGE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} chars, must be 1-200`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
}

main();
