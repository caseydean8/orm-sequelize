"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          uuid: "6e6b1730-66aa-4cbb-aa91-c9911418d3af",
          name: "Doggo Man",
          email: "d@man.com",
          role: "developer doggo",
          createdAt: "2022-04-29 18:43:52",
          updatedAt: "2022-04-29 18:43:52",
        },
        {
          uuid: "6e6b1730-66aa-4cbb-aa91-c9917418d3af",
          name: "Stormy McCat",
          email: "stormy@cat.com",
          role: "catmin",
          createdAt: "2022-04-29 18:43:52",
          updatedAt: "2022-04-29 18:43:52",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("users", null, {});
  },
};
