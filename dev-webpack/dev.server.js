
import express                            from 'express';
import { createServer }                   from 'http';

import webpack                            from 'webpack';
import webpackDevMiddleware               from 'webpack-dev-middleware';
import webpackHotMiddleware               from 'webpack-hot-middleware';

import moment                             from 'moment';
import chalk                              from 'chalk';

import config                             from './dev.config';

import { webpackPort }                    from '../config/env';

const compiler = webpack(config);

const webpackDevServerOptions = {
    quiet: false,
    inline: false,
    noInfo: false,
    lazy: false,
    serverSideRender: false,
    publicPath: config.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true }
};

const webpackDevHMROptions = {
    path: `/__webpack_hmr`,
    heartbeat: 2000
};

const app = express();
const server = createServer(app);

app.use(webpackDevMiddleware(compiler, webpackDevServerOptions));
app.use(webpackHotMiddleware(compiler, webpackDevHMROptions));

console.info(chalk.hex('#6E69E5')(`[webpack server] \t`)+chalk.cyan(`Starting webpack server at ${moment().format('llll')} !`));
server.listen(webpackPort, (err) => {
  if (err) {
      console.error(chalk.hex('#6E69E5')(`[webpack server] \t`)+chalk.red(err));
      process.exit(1);
  }
  else  {
    console.info(chalk.hex('#6E69E5')(`[webpack server] \t`)+chalk.cyan(`Webpack server listening on http://locahost:${webpackPort} since ${moment().format('llll')} !`));
  }
});
