/**
 * File Created by wangshuyan@cmhi.chinamobile.com at 2022/6/19.
 * Copyright 2022/6/19 CMCC Corporation Limited. * All rights reserved.
 *
 * This software is the confidential and proprietary information of
 * ZYHY Company. ("Confidential Information"). You shall not
 * disclose such Confidential Information and shall use it only in
 * accordance with the terms of the license. *
 *
 * @Desc
 * @author wangshuyan@cmhi.chinamobile.com
 * @date 2022/6/19
 * @version */
const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve('./unity'),
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
