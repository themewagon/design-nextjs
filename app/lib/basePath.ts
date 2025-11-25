export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function bp(path: string) {
    if (!path) return basePath
    if (path.startsWith('/')) return `${basePath}${path}`
    return `${basePath}/${path}`
}
