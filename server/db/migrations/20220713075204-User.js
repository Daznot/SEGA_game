'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'avatar_url', {
      allowNull: true,
      type: Sequelize.TEXT,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'avatar_url');
  }
};
