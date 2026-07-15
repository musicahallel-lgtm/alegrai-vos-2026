// Resolve o caminho de um arquivo em /public respeitando a base do Vite.
// Em dev a base é '/', no build de produção é './' (funciona em subcaminho no GitHub Pages).
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
