// GTA 6 meme entry for make.fun (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the X post itself, not anything this program writes: the house
// reads the post from X (its first picture and its text) and hands that to the
// judge. So this program has exactly one job: copy POST.json, the file at the
// repository root that names the post's address, into /output, where the gate
// reads it. Nothing else is written, and the two runs of an entry must write
// the same bytes, which a plain copy guarantees.
//
// The meme: a Maze Bank monthly statement. "YOUR CHILDHOOD IS OVERDRAWN",
// 13 years of Shark Card auto-payments, one overdrafted childhood, balance due
// $13,013.13, paid in full by my AI agent with real money it won in make.fun
// bounties. The make.fun ghost appears twice: as the bank's seal in the header
// and big in the magenta banner, next to the make.fun pill.
//
// POST.json currently holds a placeholder address. Replace it with the real
// post (https://x.com/<handle>/status/<id>) before submitting.
//
// Local run (mirrors the grader): mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error('could not copy POST.json:', (err as Error).message);
  process.exit(1);
}
