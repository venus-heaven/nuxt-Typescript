module.exports = {
  compilerOptions: {
    target: 'esnext',
    module: 'esnext',
    moduleResolution: 'node',
    lib: [
      'esnext',
      'esnext.asynciterable',
      'dom'
    ],
    esModuleInterop: true,
    allowJs: true,
    sourceMap: true,
    strict: true,
    noEmit: true,
    baseUrl: '.',
    paths: {
      '~/*': [
        './*'
      ],
      '@/*': [
        './*'
      ]
    },
    types: [
      '@nuxt/types'
    ]
  }
}
