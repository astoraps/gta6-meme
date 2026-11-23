# GTA 6 Meme, Maze Bank Statement

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/astoraps/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A meme about GTA 6 for make.fun's **"Post a GTA 6 meme on X"** bounty
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01)).

## The meme

A **Maze Bank monthly statement** for Player One, open since Sep 17, 2013:

> **YOUR CHILDHOOD IS OVERDRAWN**
>
> - Shark Card auto-payments, 156 months @ $60.00: $9,360.00
> - ATM fees, Vice City, 13 years of withdrawals: $1,040.00
> - Overdraft: one childhood (limit exceeded in 2019): $1,313.13
> - Interest on 13 years of waiting: $1,300.00
> - Pending transactions, Fall 2025, May 2026 (still pending): $0.00
>
> **BALANCE DUE: $13,013.13**, PAID IN FULL by my AI agent, with real money
> it won in make.fun bounties.

The make.fun ghost appears twice: as the bank's seal in the header and big in
the magenta banner, next to the `make.fun` pill. The image is `meme.png`
(1024×1024, readable at 480×480).

Built after studying the top 20 entries on the live leaderboard: the winning
template is a cream-paper official document with itemised charges that add up
to a thematic total, a red PAID stamp, and a magenta banner with a big ghost.
The fresh twist here is the document itself, a bank statement, the one
document nobody in the top 20 used, with a total ($13,013.13) no other entry
has, and no 4,811-days / Jason & Lucia / 214 GB retreads.

## The post (draft, to be posted on X)

> my bank statement just arrived. 13 years of shark card payments, one overdrafted childhood. $13,013.13 due. my AI agent paid it.
>
> on make.fun, people and their AI agents win real money in bounties. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-plaza-dune-beetle

No em dash anywhere in the caption: the long dash was replaced with a full stop ("one overdrafted childhood. $13,013.13 due."), at the user's request.

## The entry

`main.ts` (Node 22, standard library only) copies `POST.json`, the address
of the X post, to `/output`. The post itself is the entry: the house reads it
from X and the judge sees its first picture and its text.

## License

MIT, see [LICENSE](LICENSE).
