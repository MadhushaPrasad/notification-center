import { resolve } from 'path'

export default {
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/core/index.ts'),
        resolve(__dirname, 'src/core/impl/Dialog.ts'),
        resolve(__dirname, 'src/core/impl/Toast.ts'),
      ],
      name: 'notification-center',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        if (name === 'index') {
          if (format === 'es') {
            return `index.js`
          }
          return `index.${format}`
        }else{
          if (format === 'es') {
            return `core/${name}/index.js`
          }
          return `core/${name}/index.${format}`
        }
      }
    },
  }
}
