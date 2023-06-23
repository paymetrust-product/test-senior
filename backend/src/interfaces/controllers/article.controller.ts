import { Controller, Get, Post, Put, Delete, Body, Param} from "@nestjs/common";
import { ArticleService } from "@application/services/article.service";
import { Article } from "@domain/entities/article.entity";
import { Comment } from "@domain/entities/comment.entity";

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Article | undefined> {
    return this.articleService.findById(id);
  }

  @Post()
  async create(@Body() article: Article): Promise<Article> {
    return this.articleService.create(article);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() article: Article): Promise<Article | undefined> {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.articleService.delete(id);
  }

  @Get('/categories/:id')
  async findArticlesByCategorie(@Param('id') id: number): Promise<Comment | undefined> {
    return this.articleService.findArticlesByCategorie(id);
  }
}
