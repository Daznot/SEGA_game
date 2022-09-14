'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // New column(s)
    await queryInterface.addColumn('Heroes', 'score', {
      allowNull: false,
      defaultValue: 0,
      type: Sequelize.INTEGER,
    });
    // Change column(s) types
    await queryInterface.changeColumn('Heroes', 'hp', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.changeColumn('Heroes', 'speed', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
    await queryInterface.changeColumn('Heroes', 'damage', {
      allowNull: false,
      type: Sequelize.FLOAT,
    });
  },
  async down(queryInterface, Sequelize) {
    // Remove new column(s)
    await queryInterface.removeColumn('Heroes', 'score');
    // Remove column(s) changes
    await queryInterface.changeColumn('Heroes', 'hp', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('Heroes', 'speed', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('Heroes', 'damage', {
      allowNull: false,
      type: Sequelize.INTEGER,
    });
  }
};
