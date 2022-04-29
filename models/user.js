"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // should use status code 400 for these
          notNull: { msg: "User must have a name" },
          notEmpty: { msg: "Name can't be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
          // should use status code 400 for these
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email can't be empty" },
          isEmail: { msg: "Must be a valid email address" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // should use status code 400 for these
          notNull: { msg: "User must have a role" },
          notEmpty: { msg: "Role can't be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  User.associate = function ({ Post }) {
    // associations can be defined here
    // create alias "posts" for easier calls
    this.hasMany(Post, { foreignKey: "userId", as: "posts" });
  };

  // hides id in post routes from user
  User.prototype.toJSON = function () {
    return { ...this.get(), id: undefined };
  };

  return User;
};
