const path = require('path');
const webpack = require('webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.dev.config');
const Express = require('express');

const app = new Express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));
app.use(Express.static(path.join(__dirname, 'static')));
app.use(webpackHotMiddleware(compiler))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'indexDev.html'));
});

app.listen(port, error => {
    if (error) {
        console.error(error);
    } else {
        console.info(
            '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
            port,
            port
        );
    }
});
