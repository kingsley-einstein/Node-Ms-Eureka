import router from './routes';

export const config = (app) => {
  app.use('/api/v1', router);
};
