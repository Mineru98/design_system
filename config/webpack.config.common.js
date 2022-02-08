const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "webpack-bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { "@": path.resolve(__dirname, "../src/") },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
                use: [{ loader: "file-loader" }],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
