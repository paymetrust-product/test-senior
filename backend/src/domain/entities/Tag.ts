import { IsNotEmpty } from 'class-validator';

export default interface Tag {
  name: string;
  id?: number;
  slug: string;
}

export default class Tag implements Tag {
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  slug!: string;

  id?: number;
}
