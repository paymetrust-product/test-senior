import { Controller, Get, Post, Put, Delete, Body, Param} from "@nestjs/common";
import { CategoryService } from "@application/services/category.service";
import { Category } from "@domain/entities/category.entity";
import { Comment } from "@domain/entities/comment.entity";




@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Category | undefined> {
    return this.categoryService.findById(id);
  }

  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() category: Category): Promise<Category | undefined> {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.categoryService.delete(id);
  }

  @Get('/article/:id')
  async findArticlesByCategorie(@Param('id') id: number): Promise<Comment | undefined> {
    return this.categoryService.findArticlesByCategorie(id);
  }
}
