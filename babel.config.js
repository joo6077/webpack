// babel config 적용

module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                chrome: '79',
                ie: '11'
            }
        }]
    ]
}