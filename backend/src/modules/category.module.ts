import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from "@domain/entities/category.entity";
import { CategoryRepository } from "@infrastructure/repositories/category.repository";
import { CategoryService } from "@application/services/category.service";
import { CategoryController } from "@interfaces/controllers/category.controller";


@Module({
  imports:[TypeOrmModule.forFeature([Category])],
  controllers : [CategoryController],
  providers:[
    CategoryService,
    {
      provide: 'ICategoryRepository',
      useClass: CategoryRepository,
    },
  ],

})

export class CategoryModule{}