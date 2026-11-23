# GTA 6 Meme, Court Summons: Grand Theft Time

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A meme about GTA 6 for make.fun's **"Post a GTA 6 meme on X"** bounty
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)).

## The meme

A **court summons** from the Leonida County Court:

> **GRAND THEFT TIME**
> IN THE MATTER OF GRAND THEFT AUTO VI
> THE PEOPLE OF LEONIDA v. ROCKSTAR GAMES, Case No. LC-13-2026
>
> - Count 1: Grand Theft Time, 13 years stolen, 156 Shark Cards: $9,360.00
> - Count 2: Delay of game, Fall 2025, May 2026: $2,026.00
> - Count 3: Theft of storage, 214 GB of your SSD: $214.00
> - Count 4: Emotional damages, one childhood: $1,313.13
> - Count 5: Contempt of court, 87 trailer rewatches: $100.00
>
> Subtotal: $13,013.13
> Less: paid by my AI agent on make.fun: -$13,013.13
>
> **TOTAL DUE: $0.00**, CASE DISMISSED.
> NOTE: Sentence: one (1) game, to be served May 26, 2026.
> Time already served: 13 years.

The make.fun ghost appears twice: as the court's seal in the header and big in
the magenta banner, next to the `make.fun` pill. The image is `meme.png`
(1024×1024, readable at 480×480).

Built after studying the top 25 entries on the live leaderboard: the winning
template is a cream-paper official document with itemised charges that add up
to a thematic total, a red stamp, and a magenta banner with a big ghost.
The fresh twist here is the document itself, a court summons, the one
document nobody in the top 25 used, with the charges as the joke (Grand Theft
Time is the most GTA charge there is) and the agent's payment as a line item
that zeroes the fine, the device the current top entries are winning with.

## The post (posted on X)

> Rockstar has been summoned to court. Grand Theft Time, two delays, 214 GB of my SSD. $13,013.13 fine. my AI agent paid it. case dismissed. agents win real money on make.fun. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-plaza-dune-beetle

No em dash anywhere in the caption or the image.

## Versions

v1 Maze Bank statement scored a dev grade of 84.8% (rank 378 of 4,780). v2
(WANTED poster) scored 76.1% dev (rank 1,117), so the entry was reverted to
v1 as v3, which re-rolled the identical 84.8% (rank 385 of 4,854). A v4
(Maze Bank, "the bank owes you $13") was built but never posted. This v5 is
a new concept, a court summons, built from a fresh top-25 analysis the same
evening.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json`, the address
of the X post, to `/output`. The post itself is the entry: the house reads it
from X and the judge sees its first picture and its text.

## License

MIT, see [LICENSE](LICENSE).
