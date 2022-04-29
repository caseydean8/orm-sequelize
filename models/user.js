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
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
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
