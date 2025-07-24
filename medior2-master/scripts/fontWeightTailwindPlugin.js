const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ addUtilities }) {
    addUtilities({
      '.font-regular': {
        fontVariationSettings: '"wght" 400',
      },
    });

    addUtilities({
      '.font-semibold': {
        fontVariationSettings: '"wght" 600',
      },
    });

    addUtilities({
      '.font-bold': {
        fontVariationSettings: '"wght" 800',
      },
    });
  }
)
