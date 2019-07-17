import uuid from 'uuid/v4';

export const post = (sequelize, DataTypes) => sequelize.define('post', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: uuid()
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title cannot be empty'
      }
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content cannot be empty'
      }
    }
  },
  author: {
    type: DataTypes.UUID,
    allowNull: false
  }
});
