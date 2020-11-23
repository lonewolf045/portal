const path = require('path');

module.exports = {
    rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
                loader: "css-loader",
                options: {
                  importLoaders: 2,
                  import: true,
                },
            }
          ]
        }
    ],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};