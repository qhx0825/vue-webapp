module.exports =  {
    devServer: {
        port: 8081,
            proxy:{
            '/jd': {
                target: "http://192.168.31.239:9999",
                ws: true,
                changeOrigin: true
            }
        }
    }
}