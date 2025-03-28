'use strict'
const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        host: 'onenet.com',
        port: 7101,  // 此处修改你想要的端口号，
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域
        }
    },
    configureWebpack: {
        output: {
            library: packageName,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${packageName}`,
            globalObject: 'window'
        },
        externals: ['vue', 'vue-router', 'vuex']  // 改用数组形式
    },
}
