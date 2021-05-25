const path = require('path');
const { createConfig, babel, css } = require('webpack-blocks');

module.exports = {
  title: 'react-dropzone-cloudinary',
  styleguideDir: path.join(__dirname, 'styleguide'),
  webpackConfig: createConfig([babel(), css()]),
  exampleMode: 'expand',
  usageMode: 'expand',
  showSidebar: false,
  serverPort: 8080,
  moduleAliases: {
    'react-dropzone-cloudinary': path.resolve(__dirname, './src'),
  },
  require: [path.join(__dirname, 'examples/theme.css')],
  sections: [
    {
      name: '',
      content: './examples/main.md',
    },
  ],
};
