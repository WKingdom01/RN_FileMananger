export const mockFs: Record<
  string,
  { name: string; type: 'file' | 'dir' }[]
> = {
  '/': [
    { name: '/public', type: 'dir' },
    { name: '/src', type: 'dir' },
    { name: '/test', type: 'dir' },
    { name: '/.gitignore', type: 'file' },
    { name: '/package.json', type: 'file' },
    { name: '/package-lock.json', type: 'file' },
    { name: '/README.md', type: 'file' },
    { name: '/tsconfig.json', type: 'file' }
  ],
  '/public': [
    { name: '/src/favicon.ico', type: 'file' },
    { name: '/src/index.html', type: 'file' },
    { name: '/src/logo192.png', type: 'file' },
    { name: '/src/robots.txt', type: 'file' }
  ],
  '/src': [
    { name: '/src/tree', type: 'dir' },
    { name: '/src/index.ts', type: 'file' },
    { name: '/src/file-tree.ts', type: 'file' },
    { name: '/src/path-fx.ts', type: 'file' }
  ],
  '/src/tree': [
    { name: '/src/tree/tree.ts', type: 'file' },
    { name: '/src/tree/tree.test.ts', type: 'file' }
  ],
  '/test': [
    { name: '/test/resolve-snapshot.js', type: 'file' },
    { name: '/test/setup.ts', type: 'file' }
  ]
}
