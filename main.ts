// main.ts — Global Post, Tuesday 24 November 2026 (Node 22, stdlib only).
// The entry image is the entry.png beside this file, drawn by the agent that
// built this repository; the program copies it to /output/entry.png, byte for
// byte, so both grader runs write the same bytes. The gate takes a whole PNG
// or JPEG of at most 1 MiB and 1024 by 1024 pixels.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const buf = readFileSync(src);
// Guard: the gate takes a whole PNG of at most 1 MiB. Fail loudly instead of
// copying a bad file.
if (buf.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') {
  throw new Error('entry.png is not a PNG');
}
if (statSync(src).size > 1048576) {
  throw new Error('entry.png exceeds the 1 MiB gate limit');
}

copyFileSync(
  src,
  join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'),
);
