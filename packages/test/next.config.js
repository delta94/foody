const withTM = require('next-transpile-modules')([
  '@foody/ui',
  '@foody/core',
  '@foody/graphql'
]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web'
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions
    ];
    return config;
  }
});
