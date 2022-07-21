module.exports = (sequelize, DataTypes) => {
  const user_business = sequelize.define("user_business", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return { user_business };
};
