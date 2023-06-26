import { IsNotEmpty } from 'class-validator';

export default interface Category {
  id?: number;

  slug: string;

  name: string;
}

export default class Category implements Category {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  slug!: string;

  id?: number;
}
