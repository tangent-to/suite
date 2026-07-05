# Going live: the tangent suite runbook

Everything that is code-complete is done. What remains needs your accounts,
your domain, and your go/no-go. This is the ordered checklist. Do the
sections top to bottom; publishing has a required order and the site can go
up independently at any time.

Current state at a glance:

| Package | Version | Branch | Published | Notes |
| --- | --- | --- | --- | --- |
| opt, proba, lina | 0.1.0 | main | no | dependency-free leaves |
| ode | 0.1.0 | main | no | depends on lina |
| sem | 0.1.0 | main | no | depends on lina, opt, proba |
| ds | 0.6.2 | **tangent-leaves** | no | branch not merged to main |
| mc | 0.5.0 | **proba-migration** | no | branch not merged to main |
| suite (site) | 0.1.0 | main | no | this repo |

All seven packages build green, pass their tests, and match their Python/R
reference (scipy, numpy, semopy/lavaan) to machine precision. Nothing is
blocked on further engineering.

---

## 0. One thing to verify first (blocking, five minutes)

**Confirm the npm scope `@tangent.to` is claimable.** npm organization
handles have historically not allowed dots, and every package name is
`@tangent.to/x`. Before anything else:

1. Sign in at npmjs.com and try to create the organization `tangent.to`
   (Add Organization). If npm rejects the dot, the npm scope must change
   (for example to `@tangent-to`), which means a find-and-replace of the
   npm name in every `package.json` and every import in `src/` and the
   notebooks. The JSR scope `@tangent` (no dot) is unaffected either way.
2. If `tangent.to` is accepted, you are clear. The JSR side already uses
   `@tangent/x`, which is valid.

Do this before investing in the publish steps, because a scope change ripples
through everything.

---

## 1. Push the repositories to GitHub

Each package is a local git repo with its `origin` already set to
`https://github.com/tangent-to/<name>`. Create the empty repos on GitHub
under the `tangent-to` org (or let `gh repo create` do it), then push.

For each of opt, proba, lina, ode, sem, ds, mc, suite:

```bash
cd ~/Documents/git/<name>
gh repo create tangent-to/<name> --public --source=. --push   # if the repo does not exist
# or, if it already exists on GitHub:
git push -u origin main
```

For ds and mc, push their integration branches too (you merge them in
step 3):

```bash
cd ~/Documents/git/ds && git push -u origin tangent-leaves
cd ~/Documents/git/mc && git push -u origin proba-migration
```

After pushing, in each repo's GitHub settings enable Actions (the CI
workflows run automatically) and, for the suite repo only, set Pages source
to "GitHub Actions".

---

## 2. Put the site up (independent of publishing)

The site does not need the packages published. It can go live now.

1. **DNS.** At your domain registrar for `tangent.to`, add one record:

   ```
   Type: CNAME    Host: suite    Value: tangent-to.github.io
   ```

   (`public/CNAME` in this repo already contains `suite.tangent.to`, which
   tells GitHub Pages to serve there.)

2. **Enable Pages.** In the `suite` repo on GitHub: Settings, Pages,
   Source = GitHub Actions. The included `.github/workflows/deploy.yml`
   builds and deploys on every push to `main`.

3. **Verify.** After the first deploy and DNS propagation (up to an hour),
   `https://suite.tangent.to` should load. GitHub issues the HTTPS
   certificate automatically once the CNAME resolves; tick "Enforce HTTPS"
   in Pages settings once it is available.

---

## 3. Fill the image placeholders

Placeholders are the dashed, hatched boxes labelled `screenshot` or the
placeholder logo. There are three kinds.

**The logo** (`src/assets/logo.svg`). It is currently the tangent mark (a
curve with its tangent line). Replace the file with the final logo (SVG
keeps it crisp and theme-independent; if you use a raster logo, provide a
version that reads on both the cream and the brown-black backgrounds). It is
wired into `astro.config.mjs` under `logo.src`, so no code change is needed
if you keep the filename.

**The landing showcase** (`src/content/docs/index.mdx`, the
`tg-imgph tg-imgph-wide` block under "See it run"). Capture a screenshot of
note.tangent.to running one of the flagship examples (the predator-prey plot
from ode, or a fitted curve from opt read well). Then:

1. Put the image in `src/assets/` (for example `showcase.png`).
2. Replace the placeholder `<div class="tg-imgph ...">...</div>` with an
   image. In an `.mdx` file you can import and use it:

   ```mdx
   import { Image } from 'astro:assets';
   import showcase from '../../assets/showcase.png';

   <Image src={showcase} alt="A tangent example running at note.tangent.to" />
   ```

**Each package page screenshot** (`src/content/docs/<pkg>.md`, the
`tg-imgph tg-imgph-wide` block). These are Markdown, not MDX, so the simplest
path is a plain image in `public/` and a standard tag. Put the file at
`public/images/<pkg>.png` and replace the placeholder div with:

```html
<img src="/images/opt.png" alt="opt example notebook output" />
```

Good screenshots to capture per package: the notebook's most characteristic
output (opt: the robust-versus-plain curve fit; ode: the predator-prey
oscillation; sem: the fit summary table; proba: a density plot; and so on).
You can open each flagship live at
`https://note.tangent.to/gh/tangent-to/<pkg>/examples/<file>.js` once the
packages are published (step 5), which is the easiest way to produce the
shots.

---

## 4. Merge the integration branches

Two apps live on branches. Merge them to `main` before publishing.

```bash
cd ~/Documents/git/ds
git checkout main && git merge --no-ff tangent-leaves && git push origin main

cd ~/Documents/git/mc
git checkout main && git merge --no-ff proba-migration && git push origin main
```

If you prefer review, open a pull request from each branch instead and merge
through GitHub. Note that mc's merge carries the license change to GPL-3.0
and the TensorFlow removal; ds's carries the opt/proba adoption and the
p-value fixes.

---

## 5. Publish the packages (order matters)

A package can only be published after the packages it depends on are
already on the registries, because the `file:../` local links become real
version ranges at publish time. The order is:

```
1. opt      (no tangent deps)
2. proba    (no tangent deps)
3. lina     (no tangent deps)
4. ode      (needs lina)
5. sem      (needs lina, opt, proba)
6. ds       (needs opt, proba)      <- merge first (step 4)
7. mc       (needs proba)           <- merge first (step 4)
```

### 5a. Swap the local links for version ranges

Right now each dependent package points at `file:../x`. Before publishing a
dependent, change those to the published version, in two places:

- **`package.json`** `dependencies`: `"@tangent.to/lina": "^0.1.0"` (the
  version you just published for that leaf), not `"file:../lina"`.
- **`deno.json` and `jsr.json`** `imports`: change
  `"@tangent.to/lina": "../lina/src/index.js"` to
  `"@tangent.to/lina": "jsr:@tangent/lina@^0.1.0"`. This is what makes the
  JSR-published package resolve its siblings. The relative path only works
  for local development.

Do this per dependent right before you publish it, once its dependencies are
live.

### 5b. Publish each package

For each package in the order above, from its directory:

```bash
cd ~/Documents/git/<name>
npm run test:run            # unit tests
npm run test:scipy          # or test:semopy for sem; the reference check
npm run build:browser       # rebuild dist so the published bundle is current

# npm (scoped public package):
npm publish --access public

# JSR / Deno:
npx jsr publish             # or: deno publish
```

Notes:

- `--access public` is required the first time you publish a scoped package,
  or npm treats it as private.
- JSR runs its own type and format checks on publish; `npm run
  jsr:publish:dry-run` in each repo previews them.
- After publishing a leaf, its dependents can have their links swapped
  (5a) and be published in turn.
- Tag each release: `git tag v0.1.0 && git push --tags`.

---

## 6. Point the notebooks and site at the CDN (after publishing)

The flagship notebooks currently import from `../dist/index.js` so they run
locally. Once the packages are on the registries, switch them to the CDN so
that opening a notebook from GitHub in note.tangent.to actually resolves the
imports:

```js
// from:
import { normal } from '../dist/index.js';
// to:
import { normal } from 'https://esm.sh/@tangent.to/proba';
```

This affects the seven `examples/*.js` flagships and the eight
`ds/examples/user-guide/*.js` chapters. A scripted find-and-replace per repo
is fine. Re-verify at least one notebook opens and runs at
`https://note.tangent.to/gh/tangent-to/<pkg>/examples/<file>.js`.

The site's "Run it" buttons already point at those GitHub URLs, so once the
imports are CDN-based and the repos are pushed, the buttons work end to end.

---

## 7. Cleanups you can do any time (not blocking)

- **Fix the ds `05-api` bug.** The last cell of
  `ds/examples/user-guide/05-api.ipynb` references an undefined `model`. It
  predates the notebook translation; fix it in the source and re-translate
  that one chapter.
- **Decommission the ds Jekyll site.** Once the suite site covers ds, remove
  the old `docs/` Jekyll site and its `deploy-site.yml`, and only then delete
  the `.ipynb` originals in `examples/user-guide/` (they still feed that
  site today, which is why they were not removed).
- **lina performance.** If a consumer ever profiles past it, swap the Jacobi
  eigensolver for tridiagonal QL and the SVD for Golub-Reinsch (documented in
  `lina/README.md`). Not needed at current sizes.
- **rosenbrock efficiency.** The stiff ODE solver is correct but takes more
  steps than Radau; caching the Jacobian across steps would tighten it.

---

## The short version

1. Verify the `@tangent.to` npm scope is claimable.
2. Push all repos; enable Actions and Pages.
3. Site: add the `suite` CNAME record, enable Pages, done.
4. Fill logo and screenshots.
5. Merge ds and mc branches.
6. Publish leaves, then ode, then apps, swapping `file:` links for versions
   as you go.
7. Switch notebook imports to the CDN; the site's Run buttons then work.
