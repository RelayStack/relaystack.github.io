# Security policy

## Reporting a vulnerability

**Do not open a public issue.** Message [@relaystack on Telegram](https://t.me/relaystack)
and include what you found, where, and how to reproduce it. If you prefer, use
GitHub's [private vulnerability reporting](../../security/advisories/new) on this
repository.

I aim to acknowledge within three working days. There is no bounty — this is a
one-person business, and I would rather say that up front than imply otherwise.

## Scope

This is a **static site**: no server, no database, no authentication, no user
accounts, no cookies, and no client-side JavaScript. That removes most of the
usual attack surface. The parts that remain real:

- **The build and its dependencies** — supply chain, including the GitHub Actions
  used to deploy
- **The deploy path** — anything that could get code onto the published site
- **Content** — a link, a claim, or an embedded asset that misleads a visitor

Out of scope: findings that require the visitor to have already compromised their
own machine, and reports produced solely by an automated scanner with no working
proof.

## What the site does deliberately

- **No third-party requests.** Fonts are self-hosted; there are no analytics,
  pixels or embedded widgets. A visitor's browser talks to this domain and nothing
  else, except when they click a link out.
- **No client-side JavaScript.** Nothing executes on the visitor's machine.
- **No form, no data collection.** Contact happens on Telegram, which is a separate
  service with its own terms.
- **Dependencies pinned** by lockfile; Dependabot watches npm and the Actions.
- **Deploys only from `main`**, through the workflow in `.github/workflows/deploy.yml`,
  which fails the build if the SEO files are missing or any internal link is broken.
