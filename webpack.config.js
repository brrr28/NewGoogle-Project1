const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: { 
      rules: [
        {
        test: /\.s[ac]ss$/i,

        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
          
    ],
    
},
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    }
)],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
  
};