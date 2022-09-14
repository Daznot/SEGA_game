const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Game.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'id',
      },
    },
    countEnemies: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    countMoney: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    countDamage: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    timeGame: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    countWaves: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'Games',
  });
  return Game;
};
