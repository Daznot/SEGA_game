'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', [
      {
        userId: 1,
        countEnemies: 100,
        countMoney: 1500,
        countDamage: 1450,
        timeGame: 60 * 360, // 6  часов
        countWaves: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        countEnemies: 90,
        countMoney: 1400,
        countDamage: 1400,
        timeGame: 60 * 300, // 5  часов
        countWaves: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        countEnemies: 80,
        countMoney: 1300,
        countDamage: 1350,
        timeGame: 60 * 240, // 4  часа
        countWaves: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        countEnemies: 70,
        countMoney: 1200,
        countDamage: 1300,
        timeGame: 60 * 180, // 3  часа
        countWaves: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        countEnemies: 60,
        countMoney: 1100,
        countDamage: 1250,
        timeGame: 60 * 120, // 2  часа
        countWaves: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        countEnemies: 50,
        countMoney: 1000,
        countDamage: 1200,
        timeGame: 60 * 60, // 1  час
        countWaves: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    // await sequelize.query('ALTER SEQUENCE Users_id_seq RESTART WITH 5');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
