/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "examples/src/index.jsx"),
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'XdComponent.js',
    //     library: 'XdComponent',
    //     libraryTarget: 'umd',
    // },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use:  "babel-loader",
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};