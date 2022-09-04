//rollup 默认可以导出一个对象，作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default {
    input: './src/index.js', //入口文件
    output: {
        file: './dist/vue.js', //出口文件
        name: 'Vue', //在全局挂在一个 global.Vue
        format: 'umd', //esm es6模块 commonjs模块 umd(支持commonjs 和 amd)
        sourcemap: true, //希望可以调试源码
    },
    plugins: [  //插件 
        babel({
            exclude: 'node_modules/**'  //排除node modules中的所有文件
        })
    ]

}