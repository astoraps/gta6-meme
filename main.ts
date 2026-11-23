// GTA 6 meme entry for make.fun (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the X post itself, not anything this program writes: the house
// reads the post from X (its first picture and its text) and hands that to the
// judge. So this program has exactly one job: copy POST.json, the file at the
// repository root that names the post's address, into /output, where the gate
// reads it. Nothing else is written, and the two runs of an entry must write
// the same bytes, which a plain copy guarantees.
//
// The meme (v2): a Leonida Police Dept WANTED poster. GTA VI is wanted,
// 13 years at large, six wanted stars: Grand Theft Time (13 yrs), delays
// Fall 2025 and May 2026 struck through, loot 214 GB of your SSD,
// accomplices Jason and Lucia, reward $79.99, CLAIMED stamp. The make.fun
// ghost stands big in the magenta banner, next to "BOUNTY CLAIMED BY MY
// AI AGENT with real money it won on make.fun" and the make.fun pill.
// v1 was a Maze Bank monthly statement (dev grade 84.8%); v2 keeps the
// winning cream-paper document template and switches the document to the
// one format no top-20 entry used.
//
// POST.json holds the address of the v2 post (the WANTED poster on X).
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
