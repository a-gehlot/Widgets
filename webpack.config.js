const path = require('path')

module.exports = {
    entry: "./src/widgets.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
}
