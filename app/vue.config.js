module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://server:80',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/'},
            },
        }
    }
}