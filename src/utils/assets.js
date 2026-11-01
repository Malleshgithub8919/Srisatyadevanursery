export function assetUrl(path) {
  if (!path) return ''
  if (/^(?:https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path
  }
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}
