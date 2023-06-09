class AuthController {
    constructor(signInUseCase, signUpUseCase) {
      this.signInUseCase = signInUseCase;
      this.signUpUseCase = signUpUseCase;
    }
  
    async signIn(req, res) {
      try {
        const { username, password } = req.body;
        const token = await this.signInUseCase.execute(username, password);
        res.json({ token });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async signUp(req, res) {
      try {
        const { username, password } = req.body;
        await this.signUpUseCase.execute(username, password);
        res.json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = AuthController;
  