const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const images = require('rollup-plugin-image-files');
module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css', '.scss'],
        minimize: true,
        plugins: [
          cssnano({
            preset: 'default',
          }),
          autoprefixer(),
        ],
        inject: {
          insertAt: 'top',
        },
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      }),
      ...config.plugins,
    ];
    return config;
  },
};
