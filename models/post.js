"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      body: DataTypes.STRING,
      allowNull: false,
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );

  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};
