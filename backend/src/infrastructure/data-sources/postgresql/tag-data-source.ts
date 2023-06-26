import { plainToClass } from 'class-transformer';
import Tag from '../../../domain/entities/Tag';
import TagDataSource from '../../interfaces/tag-data-source';
import { AppDataSource } from './data-source';
import { TagsModel } from './models/Tags';
import UserModel from './models/User';

export default class TagDataSourceImpl implements TagDataSource {
  appDataSource = AppDataSource;

  async getById(id: number): Promise<Tag | null> {
    const tagsModel: TagsModel | null = await this.appDataSource.manager.findOneBy(
      TagsModel,
      { id: id }
    );
    const tag = plainToClass(Tag, tagsModel);
    return tag;
  }

  async create(tag: Tag): Promise<Tag> {
    const tagModel = plainToClass(TagsModel, tag);
    await this.appDataSource.manager.save(tagModel);
    return tagModel;
  }

  async getAll(): Promise<Tag[]> {
    const tagModels: TagsModel[] = await this.appDataSource.manager.find(
      TagsModel
    );
    return tagModels.map((userModel) => {
      const tag = plainToClass(Tag, userModel);
      return tag;
    });
  }

  async deleteOne(id: number): Promise<boolean> {
    const userModel: TagsModel | null = await this.appDataSource.manager.findOneBy(
      TagsModel,
      { id }
    );

    if (!userModel) {
      return false;
    }
    await this.appDataSource.manager.remove(userModel);
    return true;
  }

  async updateOne(data: Tag): Promise<Tag | null> {
    let tagModel: TagsModel | null = await this.appDataSource.manager.findOneBy(
      TagsModel,
      { id: data.id }
    );
    if (!tagModel) {
      return null;
    }
    tagModel = plainToClass(TagsModel, data);
    await this.appDataSource.manager.save(tagModel);
    return data;
  }
}
