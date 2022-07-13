'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task_tb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      task_tb.belongsTo(models.collections_tb, {
        as : "collections",
        foreignKey : {
          name : "collections_id"
        }
      })
    }
  }
  task_tb.init({
    name: DataTypes.STRING,
    is_done: DataTypes.STRING,
    collections_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'task_tb',
  });
  return task_tb;
};