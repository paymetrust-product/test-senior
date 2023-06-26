import { Router } from 'express';
import { CategoryRepositoryImpl } from '../../domain/repositories/category.repository';
import { CommentRepositoryImpl } from '../../domain/repositories/comment.repository';
import { PostRepositoryImpl } from '../../domain/repositories/post.repository';
import { TagRepositoryImpl } from '../../domain/repositories/tag.repository';
import { UserRepositoryImpl } from '../../domain/repositories/user.repository';
import Authenticate from '../../domain/use-cases/auth/login';
import CreatCategory from '../../domain/use-cases/category/create-category';
import DeleteCategory from '../../domain/use-cases/category/delete-category';
import { GetAllCategories } from '../../domain/use-cases/category/get-all-category';
import UpdateCategory from '../../domain/use-cases/category/update-category';
import CreateComment from '../../domain/use-cases/comment/create-comment';
import { GetAllCommentByPosts } from '../../domain/use-cases/comment/get-all-by-post';
import UpdateComment from '../../domain/use-cases/comment/update-comment';
import CreatePost from '../../domain/use-cases/post/create-post';
import DeletePost from '../../domain/use-cases/post/delete-post';
import { GetAllPosts } from '../../domain/use-cases/post/get-all-post';
import UpdatePost from '../../domain/use-cases/post/update-post';
import CreateTag from '../../domain/use-cases/tag/create-tag';
import DeleteTag from '../../domain/use-cases/tag/delete-tag';
import { GetAllTags } from '../../domain/use-cases/tag/get-all-tag';
import UpdateTag from '../../domain/use-cases/tag/update-tag';
import CreatUser from '../../domain/use-cases/user/create-user';
import DeleteUser from '../../domain/use-cases/user/delete-user';
import { GetAllUsers } from '../../domain/use-cases/user/get-all-user';
import UpdateUser from '../../domain/use-cases/user/update-user';
import ComparePassword from '../../infrastructure/auth/bcrypt/compare-password';
import JwtSign from '../../infrastructure/auth/jwt/jwt-sign';
import CategoryDataSourceImpl from '../../infrastructure/data-sources/postgresql/category-data-source';
import CommentDataSourceImpl from '../../infrastructure/data-sources/postgresql/comment-data-source';
import PostDataSourceImpl from '../../infrastructure/data-sources/postgresql/post-data-source';
import TagDataSourceImpl from '../../infrastructure/data-sources/postgresql/tag-data-source';
import UserDataSourceImpl from '../../infrastructure/data-sources/postgresql/user-data-source';
import LoginRouter from './auth-router';
import CategoryRouter from './category-router';
import CommentRouter from './comment-router';
import PostRouter from './post-router';
import TagRouter from './tag-router';
import UserRouter from './user-router';

const router = Router();

const userMiddleware = UserRouter(
  new GetAllUsers(new UserRepositoryImpl(new UserDataSourceImpl())),
  new CreatUser(new UserRepositoryImpl(new UserDataSourceImpl())),
  new UpdateUser(new UserRepositoryImpl(new UserDataSourceImpl())),
  new DeleteUser(new UserRepositoryImpl(new UserDataSourceImpl()))
);

const tagMiddleware = TagRouter(
  new GetAllTags(new TagRepositoryImpl(new TagDataSourceImpl())),
  new CreateTag(new TagRepositoryImpl(new TagDataSourceImpl())),
  new UpdateTag(new TagRepositoryImpl(new TagDataSourceImpl())),
  new DeleteTag(new TagRepositoryImpl(new TagDataSourceImpl()))
);

const categoryMiddleware = CategoryRouter(
  new GetAllCategories(
    new CategoryRepositoryImpl(new CategoryDataSourceImpl())
  ),
  new CreatCategory(new CategoryRepositoryImpl(new CategoryDataSourceImpl())),
  new UpdateCategory(new CategoryRepositoryImpl(new CategoryDataSourceImpl())),
  new DeleteCategory(new CategoryRepositoryImpl(new CategoryDataSourceImpl()))
);

const commentMiddleware = CommentRouter(
  new GetAllCommentByPosts(
    new CommentRepositoryImpl(new CommentDataSourceImpl())
  ),
  new CreateComment(new CommentRepositoryImpl(new CommentDataSourceImpl())),
  new UpdateComment(new CommentRepositoryImpl(new CommentDataSourceImpl()))
);

const postMiddleware = PostRouter(
  new GetAllPosts(new PostRepositoryImpl(new PostDataSourceImpl())),
  new CreatePost(
    new PostRepositoryImpl(new PostDataSourceImpl()),
    new TagRepositoryImpl(new TagDataSourceImpl()),
    new CategoryRepositoryImpl(new CategoryDataSourceImpl())
  ),
  new UpdatePost(new PostRepositoryImpl(new PostDataSourceImpl())),
  new DeletePost(new PostRepositoryImpl(new PostDataSourceImpl()))
);

const loginMiddleware = LoginRouter(
  new Authenticate(
    new UserRepositoryImpl(new UserDataSourceImpl()),
    new ComparePassword(),
    new JwtSign()
  )
);

router.use(loginMiddleware);
router.use(userMiddleware);
router.use(tagMiddleware);
router.use(categoryMiddleware);
router.use(commentMiddleware);
router.use(postMiddleware);
export default router;
