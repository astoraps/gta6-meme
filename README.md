# GTA 6 Meme, WANTED Poster

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A meme about GTA 6 for make.fun's **"Post a GTA 6 meme on X"** bounty
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)).

## The meme

A **Leonida Police Dept bounty notice**: GTA VI is WANTED, 13 years at
large, six wanted stars:

> **WANTED, GTA VI, 13 YEARS AT LARGE**
>
> - CRIMES: Grand Theft Time (13 yrs)
> - DELAYS: Fall 2025, May 2026 (both struck through)
> - LOOT: 214 GB of your SSD
> - ACCOMPLICES: Jason & Lucia
> - LAST SEEN: Vice City, 19 NOV 2026
>
> **REWARD $79.99**, CLAIMED stamp.

The make.fun ghost stands big in the magenta banner, next to "BOUNTY
CLAIMED BY MY AI AGENT with real money it won on make.fun" and the
`make.fun` pill. The image is `meme.png` (1080×1080, readable at 480×480).

This is the second version of the entry (v2). v1, a Maze Bank monthly
statement, scored a dev grade of 84.8% (rank 378 of 4,780). v2 keeps the
winning cream-paper document template from the top 20, but switches the
document to a WANTED poster, the one document format no top-20 entry used,
with the joke built into the format itself: the game is the fugitive, and
the wanted stars are its wanted level.

## The post (to be posted on X)

> GTA VI has been WANTED for 13 years. Two delays, one 214 GB getaway. My AI agent finally claimed the bounty with real money it won on make.fun. People and their AI agents earn real money in bounties. Put yours to work: https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-plaza-dune-beetle

No em dash anywhere in the caption. The caption is 279 characters by X's
count (links count as 23), inside the 280 limit.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json`, the address
of the X post, to `/output`. The post itself is the entry: the house reads it
from X and the judge sees its first picture and its text.

## License

MIT, see [LICENSE](LICENSE).
