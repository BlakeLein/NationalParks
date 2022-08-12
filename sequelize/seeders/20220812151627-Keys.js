"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Keys", [
      {
        name: "Open Wether API Key",
        key: "3a37c92ad5008488beef7b9b5ed1b068",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "NPS API Key",
        key: "myb3Ggv3zncy7E0gjNGOOPuJiUTblbehZYIAhmEs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Keys", null, {});
  },
};
