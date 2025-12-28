
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',


    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets/images", to: "assets/images"},

            ],

        }),

    ],
    devServer: {
        static: './dist',
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "@tailwindcss/postcss"
                                    ],
                                ],
                            },
                        },
                    },
                ],
            }
            ]

    }

};