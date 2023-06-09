class SignUpUseCase {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async execute(username, password) {
      const existingUser = await this.userRepository.findByUsername(username);
      if (existingUser) {
        throw new Error('Username already exists');
      }
  
      // Logic to hash password
  
      const newUser = { username, passwordHash: hashedPassword };
      return this.userRepository.create(newUser);
    }
  }
  
  module.exports = SignUpUseCase;
  