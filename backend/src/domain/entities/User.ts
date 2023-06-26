import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength
} from 'class-validator';

export default interface User {
  firstName: string;
  lastName: string;
  email?: string;
  phone: string;
  password?: string;
  id?: number;
}

export default class User implements User {
  @IsNotEmpty()
  firstName!: string;

  @IsNotEmpty()
  lastName!: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  phone!: string;

  @IsNotEmpty()
  @MinLength(4)
  password?: string;
}
