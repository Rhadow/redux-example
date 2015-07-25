var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    opn = require('opn');

var bundleStart = null,
    compiler = webpack(webpackConfig);

compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
});

compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
});

var bundler = new WebpackDevServer(compiler, {
    contentBase: './src',
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
        colors: true
    }
});

bundler.listen(8080, 'localhost', function() {
    console.log('Bundling project, please wait...');
    opn('http://localhost:8080');
});
