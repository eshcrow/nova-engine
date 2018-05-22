
/*
*   NovaEngine - Dev server -
*   author: Aurélien Dupays Dexemple
*/

import path                               from 'path';

import express                            from 'express';
import { createServer }                   from 'http';

import moment                             from 'moment';
import chalk                              from 'chalk';

import { serverPort }                     from '../config/env';

const app = express();
const server = createServer(app);

app.get('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

console.info(chalk.hex('#6E69E5')(`[developement server] \t`)+chalk.cyan(`Starting development server at ${moment().format('llll')} !`));
server.listen(serverPort, (err) => {
  if (err) {
      console.error(chalk.hex('#6E69E5')(`[developement server] \t\t\t`)+chalk.red(err));
      process.exit(1);
  }
  else  {
    console.info(chalk.hex('#6E69E5')(`[developement server] \t`)+chalk.cyan(`Webpack development server listening on http://localhost:${serverPort} since ${moment().format('llll')} !`));
  }
});
