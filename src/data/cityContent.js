// Each city page's text is its own module (src/data/cities/<id>.js), so the main bundle doesn't
// carry 30 pages of copy. The browser loads a city's module when its page opens: main.jsx waits
// for it before hydrating a prerendered city page, and client-side navigation loads it on demand.
// The prerender (entry-server.jsx) primes every city up front, so it has nothing to load lazily.
const loaders = import.meta.env.SSR ? {} : import.meta.glob('./cities/*.js', { import: 'default' })
const cache = {}
const file = (id) => `./cities/${id}.js`

export const hasCityContent = (id) => id in cache || file(id) in loaders
export const getCityContent = (id) => cache[id]

export async function loadCityContent(id) {
  if (!cache[id] && hasCityContent(id)) cache[id] = await loaders[file(id)]()
  return cache[id]
}

export function primeCityContent(byId) {
  Object.assign(cache, byId)
}
