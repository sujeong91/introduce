const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: 진입점이 될 파일들.
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    // 빌드된 파일에 대한 설정: 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'docs/'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.resolve("docs/"),
        index: "index.html",
        hot: true,
        host: "localhost",
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
        new htmlWebpackPlugin({ 
            template: 'index.html', // entry file root
            filename: 'index.html'  // build file name
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },
            {
                test: [/\.scss$/, /\.css$/],
                // loader 읽는 순서: 아래에서 위로 읽음.
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    publicPath: '../font', // file 경로 수정. file 경로 수정은 outputPath보다 우선순위 있음.
                    outputPath: 'font/', // file 경로 수정 및 파일 위치 변경
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    publicPath: '../img', 
                    outputPath: 'img/',
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
        ]
    },
    devtool: 'source-map',
    // webpack build option: production은 최적화되어 빌드되어지는 특징을 가지고 있고 development는 빠르게 빌드하는 특징, none 같은 경우는 아무 기능 없이 웹팩으로 빌드
    mode: 'development'
};