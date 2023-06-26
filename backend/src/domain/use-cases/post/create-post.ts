import { plainToClass } from 'class-transformer';
import { CategoryModel } from '../../../infrastructure/data-sources/postgresql/models/Category';
import { PostModel } from '../../../infrastructure/data-sources/postgresql/models/Post';
import { TagsModel } from '../../../infrastructure/data-sources/postgresql/models/Tags';
import Category from '../../entities/Category';
import Post from '../../entities/Post';
import Tag from '../../entities/Tag';
import CategoryRepository from '../../ports/repositories/category.repository.port';
import PostRepository from '../../ports/repositories/post.repository.port';
import TagRepository from '../../ports/repositories/tag.repository.port';
import CreatePostUserCase from '../../ports/use-cases/post/create-post';

export default class CreatePost implements CreatePostUserCase {
  postRepository: PostRepository;
  tagRepository: TagRepository;
  categorieRepository: CategoryRepository;
  constructor(
    postRepository: PostRepository,
    tagRepository: TagRepository,
    categorieRepository: CategoryRepository
  ) {
    this.postRepository = postRepository;
    this.tagRepository = tagRepository;
    this.categorieRepository = categorieRepository;
  }

  async execute(post: Post): Promise<Post> {
    let categories: (Category | null)[];
    let tags: (Tag | null)[];

    const userModel = plainToClass(PostModel, post);

    const categoryPromises = post.categories.map((categoryId) =>
      this.categorieRepository.getCategoryById(categoryId)
    );
    categories = await Promise.all(categoryPromises);
    categories.forEach((it) => {
      if (!it) {
        throw new Error(`${it} est introuvable category`);
      }
      const categorie = plainToClass(CategoryModel, it);
      userModel.categories.push(categorie);
    });

    const tagsPromises = post.tags.map((tagId) =>
      this.tagRepository.getTagById(tagId)
    );
    tags = await Promise.all(tagsPromises);
    tags.forEach((it) => {
      if (!it) {
        throw new Error(`${it} est introuvable tags`);
      }
      const tag = plainToClass(TagsModel, it);
      userModel.tags.push(tag);
    });

    const result = await this.postRepository.createPost(userModel);
    return result;
  }
}
