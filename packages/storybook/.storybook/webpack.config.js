module.exports = ({ config }) => {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    'react-native$': 'react-native-web',
  };
  config.resolve.extensions.push('.web.ts', '.web.tsx');

  return config;
};
