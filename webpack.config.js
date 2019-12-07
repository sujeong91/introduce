const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry file
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
        new htmlWebpackPlugin({ 
            template: 'index.html',
            filename: 'index.html' 
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
    mode: 'development'
};