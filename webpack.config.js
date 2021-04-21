const path = require('path')
const MyWebpackPlugin = require('./my-webpack-plugin')

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
                    publicPath: './dist/', // dist폴더 안에
                    name: '[name].[ext]', // 이름.확장자
                    limit: 20000, // 20kb 초과 시 file-loader로
                }
            }
        ]
    },
    plugins: [
        new MyWebpackPlugin()
    ]
}