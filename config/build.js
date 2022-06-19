const webpack = require('webpack');
const path = require('path');
const rimraf = require('rimraf');
const argv = process.argv;
const srcPath = argv[2];
const webpackConfig = {
    mode: 'production',
    output: {
        path: path.resolve('unity'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};
webpackConfig.entry = './src/' + srcPath + '/index.ts';
webpackConfig.output.filename = srcPath + '/index.js';
rimraf('unity', () => {
    console.log(webpackConfig);
    webpack(webpackConfig, (e, s) => {
        // console.log(s);
    });
});
