module.exports = (sequelize, DataTypes) => {
  const user_register_individuals = sequelize.define(
    "user_register_register_business",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    }
  );

  return { user_register_business };
};
