const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;

module.exports = (options) => ({
    mode: options.mode,
    entry: options.entry,
    output: Object.assign(
        {
            path: path.resolve(process.cwd(), 'build'),
            publicPath: '/'
        },
        options.output
    ),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: options.babelQuery
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './app/scss/_vars.scss',
                                './app/scss/_color-matrix.scss',
                                './app/scss/_mixins.scss',
                                './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
                                './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid-framework.scss',
                                './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid.scss',
                                './node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss'
                            ]
                        },
                    }
                ],

            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|eot?#iefix|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ]
    },
    plugins: options.plugins.concat([
        new webpack.ProvidePlugin({
            fetch: 'exports-loader?self.fetch!whatwg-fetch'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]),
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: ['.js', '.jsx', '.scss', '.react.js'],
        mainFields: ['browser', 'jsnext:main', 'main']
    },
    devtool: options.devtool,
    target: 'web',
    performance: options.performance || {},
    optimization: {
        namedModules: true,
        splitChunks: {
            name: 'vendor',
            minChunks: 2
        }
    }
});
