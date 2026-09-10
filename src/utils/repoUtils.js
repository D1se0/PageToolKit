import { REPOS, RED_CATEGORIES, BLUE_CATEGORIES } from '../data/repos.js'

export function slugOf(repo) {
  return repo.url.replace(/\/+$/, '').split('/').pop()
}

export function findRepoBySlug(slug) {
  return REPOS.find((r) => slugOf(r) === slug)
}

export function relatedRepos(repo, limit = 3) {
  return REPOS.filter((r) => r !== repo && r.team === repo.team && r.category === repo.category).slice(0, limit)
}

export const LANG_COLORS = {
  Python: '#f1c40f',
  JavaScript: '#f0db4f',
  TypeScript: '#3ba9e0',
  HTML: '#e6714a',
  CSS: '#5b9dd9',
  Shell: '#8bd39a',
  'C#': '#a97bde',
  'C++': '#e06c9f',
  C: '#a3b1c6',
  Rust: '#e08a4d',
  Makefile: '#9aa0a6',
}

export function categoryLabel(id) {
  const found = [...RED_CATEGORIES, ...BLUE_CATEGORIES].find((c) => c.id === id)
  return found ? found.label : id
}
