const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/index',

    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
    },

    performance: {
        hints: false
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: {
                    loader: 'url-loader'
                },
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 1337,
                open: false,
                proxy: `http://localhost:8080/`
            },
            {
                reload: false
            }
        ),
    ]
};