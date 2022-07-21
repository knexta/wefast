module.exports = (sequelize, DataTypes) => {
  const user_register_individuals = sequelize.define(
    "user_register_individuals",
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

      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    }
  );

  return { user_register_individuals };
};
