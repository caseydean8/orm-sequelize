"use strict";
// const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );

  Post.associate = function ({ User }) {
    // associations can be defined here
    this.belongsTo(User, { foreignKey: "userId" });
  };
  return Post;
};
