module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://my-sit.api.com"
            }
        }
    }
}