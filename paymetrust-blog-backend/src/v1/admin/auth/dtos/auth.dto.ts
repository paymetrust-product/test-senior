import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class authAdminDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  exp: number;
}

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
