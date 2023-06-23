import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export default interface Login {
  phone: string;
  password: string;
}

export default class Login implements Login {
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(10)
  phone!: string;

  @IsNotEmpty()
  @MinLength(4)
  password!: string;
}
