'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Chats', [
      {
        user_id: 1,
        message: 'Привет бродяги',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        message: 'Ну привет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        message: 'Хочу домой',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        message: 'Согласна',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
