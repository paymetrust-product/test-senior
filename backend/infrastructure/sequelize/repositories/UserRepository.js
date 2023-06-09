const User = require('../models/User');

class UserRepository {
  async createUser(userData) {
    return User.create(userData);
  }

  async getUserById(userId) {
    return User.findByPk(userId);
  }

  async updateUser(user) {
    return user.save();
  }

  async deleteUser(userId) {
    return User.destroy({
      where: {
        id: userId,
      },
    });
  }
}

module.exports = UserRepository;
