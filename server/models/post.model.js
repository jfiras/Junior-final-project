module.exports = (connection, DataTypes) => {
  const Post = connection.define(
    "posts",
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING,
        defaultValue: "https://www.ntaskmanager.com/wp-content/uploads/2022/08/what-is-problem-management.png"
      },
      category: {
        type: DataTypes.ENUM("Front Side","Back Side","Both Sides"),
        allowNull: false,
        defaultValue: "Both Sides",
      },
    },
  );
  return Post;
};
