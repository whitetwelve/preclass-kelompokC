'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collections_tb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      collections_tb.belongsTo(models.users_tb, {
        as : "users",
        foreignKey : {
          name : "user_id"
        }
      })

      collections_tb.hasOne(models.task_tb, {
        as : "tasks",
        foreignKey : {
          name : "collections_id"
        }
      })

    }
  }
  collections_tb.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'collections_tb',
  });
  return collections_tb;
};