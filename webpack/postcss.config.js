module.exports = (ctx) => ({
    parser: ctx.parser ? 'sugarss' : false,
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-preset-env': {},
      'autoprefixer': require('autoprefixer'),
      'cssnano': {}
    }
  });