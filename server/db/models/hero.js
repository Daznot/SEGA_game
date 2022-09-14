const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
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
  Hero.init({
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
    hp: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    speed: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    damage: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    coolDown: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    lvl: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'Heroes',
  });
  return Hero;
};
