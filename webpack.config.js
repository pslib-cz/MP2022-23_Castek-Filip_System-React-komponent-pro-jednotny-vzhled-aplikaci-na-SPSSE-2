const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Name of the bundled file
    library: 'filcast019-react-lib', // Replace 'MyReactLibrary' with the library name you want to use
    libraryTarget: 'umd', // Specify the library target
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`, // Fix global object reference
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false, // Disable fs module during the build
      path: require.resolve('path-browserify'), // Use path-browserify as a replacement
    },
  },
  externals: {
    // Specify any peer dependencies that should be excluded from the bundle
    react: 'react',
    'react-dom': 'react-dom',
  },
};
