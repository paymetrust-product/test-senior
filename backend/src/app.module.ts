import { Module } from '@nestjs/common';

import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "@modules/user.module";
import { CommentModule } from "@modules/comment.module";
import { CategoryModule } from "@modules/category.module";
import { ArticleModule } from "@modules/article.module";
import { AuthModule } from '@auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'backend_gk',
      password: '123456',
      database: 'backend_gk',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    CommentModule,
    CategoryModule,
    ArticleModule,
    AuthModule,
  ],
})
export class AppModule {}
