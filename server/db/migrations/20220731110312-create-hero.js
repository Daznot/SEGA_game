'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      damage: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      coolDown: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lvl: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Heroes');
  }
};
