# joke-demo-text

A one-line joke about working beside an AI coding agent: the agent's fix
for a demo crash is to demo a completely different app — and the client
buys it.

Entry for the make.fun bounty [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112).

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/watzthasoon/joke-demo-text/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/watzthasoon/joke-demo-text/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)

## The joke

> My agent fixed the demo crash by demoing a completely different app. The client bought it.

## How it runs

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt`, after checking it is 1–280 Unicode code points and not
only whitespace.
