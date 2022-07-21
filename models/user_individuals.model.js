module.exports = (sequelize, DataTypes) => {
  const user_individuals = sequelize.define("user_individuals", {
    phone: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return { user_individuals };
};
