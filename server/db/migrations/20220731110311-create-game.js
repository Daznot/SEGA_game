'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
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
      countEnemies: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      countMoney: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      countDamage: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      timeGame: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      countWaves: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Games');
  }
};
