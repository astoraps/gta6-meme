// GTA 6 meme entry for make.fun (gta6-meme-x-01), Node 22, standard library only.
//
// The entry is the X post itself, not anything this program writes: the house
// reads the post from X (its first picture and its text) and hands that to the
// judge. So this program has exactly one job: copy POST.json, the file at the
// repository root that names the post's address, into /output, where the gate
// reads it. Nothing else is written, and the two runs of an entry must write
// the same bytes, which a plain copy guarantees.
//
// The meme (v5): a Leonida County Court summons. "GRAND THEFT TIME", in the
// matter of Grand Theft Auto VI, The People of Leonida v. Rockstar Games.
// Five counts with fines that add up to $13,013.13, then "Less: paid by my
// AI agent on make.fun" zeroes the fine, TOTAL DUE $0.00, CASE DISMISSED.
// The make.fun ghost appears twice: as the court's seal in the header and
// big in the magenta banner, next to the make.fun pill.
// v1 was a Maze Bank statement (dev grade 84.8%); v2 a WANTED poster
// (76.1%); v3 reverted to v1; v4 (Maze Bank overpayment) was built but never
// posted. v5 is a new concept from a fresh top-25 analysis.
//
// POST.json holds the address of the v5 post (the court summons on X).
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
