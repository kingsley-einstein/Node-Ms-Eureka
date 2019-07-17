import express from 'express';
import { Eureka } from 'eureka-js-client';
import { sequelize } from './db';
import { config } from './config';

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

config(app);

const client = new Eureka({
  instance: {
    app: 'post-service',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    port: {
      $: 4700,
      '@enabled': true
    },
    vipAddress: 'post-service',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn'
    },
    statusPageUrl: 'http://localhost:4700/info'
  },
  eureka: {
    host: 'localhost',
    port: 8878,
    fetchRegistry: true,
    registerWithEureka: true,
    servicePath: '/eureka/apps/',
    preferIpAddress: true,
    fetchMetadata: true,
    filterUpInstances: true,
    logger: {
      warn(args) {
        console.log(args);
      },
      info(args) {
        console.log(args);
      }
    }
  }
});

sequelize
  .sync({
    force: false
  })
  .then((v) => {
    app.listen(4700, 'localhost', () => {
      console.log(`Express server running ${v}`);
      client.start((err, rest) => {
        if (err) throw err;
        console.log(rest);
      });
    });
  });
