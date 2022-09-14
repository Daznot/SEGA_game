const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static async isExists(email) {
      return await this.findOne({ where: { email } });
    }
    static associate(models) {
      this.hasMany(models.Hero, { foreignKey: 'userId' });
      this.hasMany(models.Game, { foreignKey: 'userId' });
      this.hasMany(models.Chat, { foreignKey: 'user_id' });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
      },
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    //   validate: {
    //     is: /^[a-zA-Zа-яА-ЯёЁ]{3,20}$/,
    //   },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    avatar_url: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    money: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};
