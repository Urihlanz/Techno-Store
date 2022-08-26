module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: false,
      },
    ],
    [
      '@babel/plugin-proposal-object-rest-spread',
      {
        useBuiltIns: 'usage',
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: process.env.NODE_ENV === 'development',
      }
    ],
  ],
};
