const path = require('path')
const webpack = require('webpack')
const childProcess = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // js -> inline-style 적용 시켜줌
                    'style-loader',
                    // css -> js 실행순서 ⬆
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader', // base64로 변환
                options: {
                    // publicPath: './dist/', // prefix
                    name: '[name].[ext]', // 이름.확장자
                    limit: 20000, // 20kb 초과 시 file-loader로
                }
            }
        ]
    },
    plugins: [
        // 웹팩 번들 전 배너 주석
        // childProcess 터미널 명령어 접근 가능.
        new webpack.BannerPlugin({
            banner: `
                Build Date: ${new Date().toLocaleString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Author: ${childProcess.execSync('git config user.name')}
            `
        }),
        // 전역 변수처럼 사용 가능.
        new webpack.DefinePlugin({
            TWO: '1+1',
            'api.domain': JSON.stringify('http://dev.api.domain.com')
        }),
        // html 파일을 빌드해주고 자동으로 js파일 연동시켜줌.
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                env: process.env.NODE_ENV === 'development'? '(개발용)' : ''
            },
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true,
                removeComments: true,
            } : false
        }),
        // dist 파일 초기화 및 다시 생성
        new CleanWebpackPlugin()
    ]
}