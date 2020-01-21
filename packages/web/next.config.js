const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['@foody/ui', '@foody/graphql', '@foody/core'],
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');

    return config;
  },
});
