module.exports = function myBabelPreset() {
    return {
        plugins: [
            '@babel/plugin-transform-strict-mode',
            '@babel/plugin-transform-arrow-functions',
            '@babel/plugin-transform-block-scoping',
        ]
    }
}