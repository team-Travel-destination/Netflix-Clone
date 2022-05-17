const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/addMovie',
            {
                target: 'https://movie-db-wajeeh.herokuapp.com',
                changeOrigin: true
            }
        )
    )

    app.use(
        createProxyMiddleware('/trending',
            {
                target: 'https://movie-db-wajeeh.herokuapp.com',
                changeOrigin: true
            }
        )
    )
}