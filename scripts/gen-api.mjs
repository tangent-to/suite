#!/usr/bin/env node
/**
 * Generate the API reference for every package from its JSDoc.
 *
 * For each package this runs TypeDoc (with typedoc-plugin-markdown) against
 * ../<pkg>/src/index.js and writes markdown into src/content/docs/api/<pkg>/,
 * then post-processes each file so Starlight can render it (adds a frontmatter
 * title, drops TypeDoc's own breadcrumb and H1). The result is committed to
 * this repo, so the site build does not need the package repos present.
 *
 * The package repos must be siblings of this one (../opt, ../proba, ...).
 * Run with: npm run gen:api
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packages = ['opt', 'proba', 'lina', 'grad', 'ode', 'ds', 'mc', 'sem'];
const outBase = join(root, 'src/content/docs/api');

rmSync(outBase, { recursive: true, force: true });

for (const pkg of packages) {
  const entry = join(root, '..', pkg, 'src/index.js');
  if (!existsSync(entry)) {
    console.warn(`[gen-api] skipping ${pkg}: ${entry} not found (is the repo checked out as a sibling?)`);
    continue;
  }
  console.log(`[gen-api] ${pkg}`);
  execFileSync('node', [
    join(root, 'node_modules/typedoc/bin/typedoc'),
    '--plugin', 'typedoc-plugin-markdown',
    '--entryPoints', entry,
    '--tsconfig', join(root, 'tsconfig.typedoc.json'),
    '--out', join(outBase, pkg),
    '--readme', 'none',
    '--githubPages', 'false',
    '--hideGenerator',
    '--excludeInternal',
  ], { stdio: 'inherit', cwd: root });

  // Drop TypeDoc's index (our hand-written <pkg>.md page is the overview).
  const readme = join(outBase, pkg, 'README.md');
  if (existsSync(readme)) rmSync(readme);

  walk(join(outBase, pkg));
}

/** Recurse a directory, post-processing every markdown file. */
function walk(dir) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.md')) addFrontmatter(p);
  }
}

/**
 * Turn a TypeDoc markdown page into a Starlight page: derive the title from
 * the H1 (e.g. "# Function: svd()" -> "svd"), then remove TypeDoc's leading
 * breadcrumb and that H1, and prepend Starlight frontmatter.
 */
function addFrontmatter(path) {
  let s = readFileSync(path, 'utf8');
  const h1 = s.match(/^#\s+(.+?)\s*$/m);
  let title = h1 ? h1[1] : 'API';
  title = title.replace(/^[A-Za-z]+:\s*/, '').replace(/\(\)$/, '').trim();
  // Remove everything up to and including the first H1 line (breadcrumb + H1).
  s = s.replace(/^[\s\S]*?^#\s+.+$\n/m, '').trimStart();
  const safe = title.replace(/"/g, '\\"');
  writeFileSync(path, `---\ntitle: "${safe}"\n---\n\n${s}`);
}

console.log('[gen-api] done');
