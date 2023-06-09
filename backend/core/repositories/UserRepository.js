const User = require('../core/entities/User');

class UserRepository {
  constructor(database) {
    this.database = database;
    this.UserModel = database.models.User;
  }

  async findById(userId) {
    return this.UserModel.findByPk(userId);
  }

  async findByUsername(username) {
    return this.UserModel.findOne({ where: { username } });
  }

  async create(user) {
    return this.UserModel.create(user);
  }

  async update(user) {
    const existingUser = await this.UserModel.findByPk(user.id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    return existingUser.update(user);
  }

  async delete(userId) {
    return this.UserModel.destroy({ where: { id: userId } });
  }
}

module.exports = UserRepository;
