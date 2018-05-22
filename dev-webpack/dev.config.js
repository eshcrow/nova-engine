
import path                                                     from 'path';
import webpack                                                  from 'webpack';

import { webpackPort }                                          from '../config/env';

const config = {
    target: 'web',

    devtool: 'cheap-eval-source-map',

    mode: 'development',

    entry: {
        main: [
            `webpack-hot-middleware/client?path=http://localhost:${webpackPort}/__webpack_hmr&timeout=20000`,
            path.resolve(__dirname, '../dev-server/client.js')
        ]
    },

    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js',
        publicPath: `http://locahost:2783/build/`
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [['env', {'es2015': {'modules': false}}], 'stage-2', 'airbnb']
                        }
                    }
                ]
            },

            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.js'],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
    ]
};

export default config;
