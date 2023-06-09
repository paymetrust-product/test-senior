class SignInUseCase {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(username, password) {
      const user = await this.userRepository.findByUsername(username);
      if (!user) {
        throw new Error('Invalid username');
      }
  
      // Logic to compare password hash
  
      // Return user data or authentication token
    }
  }
  
  module.exports = SignInUseCase;
  