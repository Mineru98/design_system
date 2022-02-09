const { merge } = require("webpack-merge");
const { HashedModuleIdsPlugin } = require("webpack");
const common = require("./webpack.config.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
	mode: "production",
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
	plugins: [
		new CompressionPlugin({
			algorithm: "gzip",
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
		new HashedModuleIdsPlugin({
			hashFunction: "sha256",
			hashDigest: "hex",
			hashDigestLength: 20,
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader],
			},
			{
				enforce: "pre",
				test: /\.(js|jsx)$/i,
				loader: "source-map-loader",
			},
		],
	},
	// 이 속성을 통해 webpack은 성능 힌트를 계산하는 데 사용되는 파일을 제어할 수 있음.
	performance: {
		assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
});
