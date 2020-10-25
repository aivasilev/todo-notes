module.exports = {
  purge: [],
  theme: {
    extend: {
      minHeight: {
        '64': '16rem',
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(104, 211, 145, 0.5)',
      },
      gridTemplateColumns: {
       'notes': 'repeat(auto-fill, minmax(160px, 1fr))',
      }
    },
  },
  variants: {},
  plugins: [],
}
