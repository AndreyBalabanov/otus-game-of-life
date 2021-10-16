
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
module.exports = config;