'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      // define association here
    }
  }
  Activity.init(
    {
      name: DataTypes.STRING,
      projectName: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME
    },
    {
      sequelize,
      modelName: 'Activity'
    }
  );
  return Activity;
};
