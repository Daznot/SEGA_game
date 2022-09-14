'use strict';

const { sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Heroes', [
      {
        userId: 1,
        hp: 100,
        speed: 2.5,
        damage: 10,
        score: 0,
        coolDown: 0,
        lvl: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    // await sequelize.query('ALTER SEQUENCE Users_id_seq RESTART WITH 5');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Heroes', null, {});
  }
};
