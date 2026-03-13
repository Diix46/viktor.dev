// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'blue',
      neutral: 'zinc'
    },
    button: {
      slots: {
        base: 'font-semibold tracking-wide cursor-pointer'
      }
    },
    card: {
      slots: {
        root: 'overflow-hidden'
      }
    }
  }
})
