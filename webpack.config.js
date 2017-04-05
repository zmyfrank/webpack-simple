/**
 * Created by Frank on 2017/4/3.
 */
'use strick';
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

    module.exports = {
        context:__dirname+'/src',
        //输入
        entry: {
            app:"./entry.js"
        },
        //输出
        output: {
            path:__dirname+"/dist",
            filename:"js/[name]-[chunkhash].bundle.js"
        },
        plugins:[
            new htmlWebpackPlugin({
                templete:'index.html'
            })
        ],
        module:{
            rules:[
                {
                    test:/\.css$/,
                    use:['style-loader','css-loader']
                },
                {
                    test:/\.js$/,
                    use:[{
                        loader:'babel-loader',
                        options:{presets:['es2015']}
                    }]
                }
            ]
        }
    }
