'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "userId" })
    }
  };

  User.getUserByCredentials = async (email, password) => {
    const user = await User.findOne({
      where: {
        email
      }
    });

    if (user && bcrypt.compareSync(password, user.password)) {
      return user.dataValues;
    }
    return null;
  }

  User.generateAuthToken = (user) => {
    const token = jwt.sign(user.email, process.env.JWT_SECRET);
    return token;
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',

    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    },
  });

  return User;
};