import { Sequelize, DataTypes } from 'sequelize';
import { post } from './model';

export const sequelize = new Sequelize({
  database: 'feigndb',
  host: 'localhost',
  username: 'postgres',
  password: 'password',
  port: 5433,
  define: {
    underscored: true
  },
  dialect: 'postgres'
});

export const Post = post(sequelize, DataTypes);
