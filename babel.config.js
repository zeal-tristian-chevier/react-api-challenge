module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript' // Add this if you're using TypeScript
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs' // Ensure this plugin is included
    ]
  };