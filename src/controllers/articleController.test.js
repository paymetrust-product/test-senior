const request = require('supertest');
const app = require('../app');
const sequelize = require('../database');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Article API', () => {
  it('should create a new article', async () => {
    const response = await request(app)
      .post('/articles')
      .send({ title: 'Test Article', content: 'Lorem ipsum dolor sit amet' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test Article');
  });

  it('should return an article by ID', async () => {
    const createResponse = await request(app)
      .post('/articles')
      .send({ title: 'Test Article', content: 'Lorem ipsum dolor sit amet' })
      .expect(201);

    const articleId = createResponse.body.id;

    const response = await request(app)
      .get(`/articles/${articleId}`)
      .expect(200);

    expect(response.body).toHaveProperty('article');
    expect(response.body.article.id).toBe(articleId);
  });

  // Ajoutez d'autres tests pour les autres fonctionnalités de l'API
});
