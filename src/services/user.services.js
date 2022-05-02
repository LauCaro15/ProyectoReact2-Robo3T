const Boom = require('@hapi/boom');
const UserModel = require('../models/user.model');
class UserService {
  async createUser(user) {
    user.save();
    return user;
  }
  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(UserModel.find());
      }, 3000);
    });
  }
  async showUser(userId) {
    return UserModel.findById({ _id: userId }).then(
      (userFind) => {
        if (!userFind) throw Boom.notFound('No se econtró la persona');
        return userFind;
      }
    );
  }
  async editUser(userId, name, lastname, email, active) {
    return UserModel.findById({ _id: userId }).then(
      (userFind) => {
        if (!userFind) throw Boom.notFound('No se econtró la persona');
        return UserModel.updateOne(
          { _id: userId },
          {name, lastname, email, active}
        );
      }
    );
  }
  async removeUser(userId) {
    return UserModel.findById({ _id: userId }).then(
      (userFind) => {
        if (!userFind) throw Boom.notFound('No se econtró la persona');
        return UserModel.deleteOne(userFind);
      }
    );
  }
}
module.exports = UserService;