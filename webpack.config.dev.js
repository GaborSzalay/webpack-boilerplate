const webpack = require('webpack');

module.exports = {
    entry: './ClientSrc/index.js',
    output: {
        filename: './wwwroot/scripts/bundle.js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                use: 'url-loader'
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};