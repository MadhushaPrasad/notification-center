import { resolve } from 'path'

export default {
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/core/index.ts'),
        resolve(__dirname, 'src/core/impl/PopupNotificationImpl.ts'),
        resolve(__dirname, 'src/core/impl/ToastNotificationImpl.ts'),
      ],
      name: 'Notification-Center',
      formats: ['es', 'cjs'],
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`
        }

        return `${name}.${format}`
      }
    },
    rollupOptions: {
      external: ['collect.js']
    }
  }
}
