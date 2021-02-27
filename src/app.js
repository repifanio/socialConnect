import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.server.use('/api', routes);
  }
}

export default new App().server;
