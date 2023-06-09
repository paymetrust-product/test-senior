class ManageUserUseCase {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async create(userData) {
      return this.userRepository.create(userData);
    }
  
    async update(userData) {
      return this.userRepository.update(userData);
    }
  
    async delete(userId) {
      return this.userRepository.delete(userId);
    }
  }
  
  module.exports = ManageUserUseCase;
  