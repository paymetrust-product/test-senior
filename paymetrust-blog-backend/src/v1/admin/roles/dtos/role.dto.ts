import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class EditRoleDto {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsNumber({}, { each: true })
  permissions: number[];
}
