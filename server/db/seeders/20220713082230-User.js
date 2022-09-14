const bcrypt = require('bcrypt');

const { sequelize } = require('../models');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Юрий',
          email: 'yurij@elbrus-boot.camp',
          password: await bcrypt.hash('112233Aaa', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Поля',
          email: 'polechkapo@yandex.ru',
          password: await bcrypt.hash('test', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Вован',
          email: 'vovan@yandex.ru',
          password: await bcrypt.hash('112233Aaa', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Максим',
          email: 'maxim@yandex.ru',
          password: await bcrypt.hash('112233Aaa', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Саня',
          email: 'sanya@yandex.ru',
          password: await bcrypt.hash('112233Aaa', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Абдулла',
          email: 'abdylla@yandex.ru',
          password: await bcrypt.hash('112233Aaa', 2), // test
          money: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    // await sequelize.query('ALTER SEQUENCE Users_id_seq RESTART WITH 5');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
