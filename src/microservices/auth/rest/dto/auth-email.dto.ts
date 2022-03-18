import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class AuthEmailDto {
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  @IsEmail()
  email: string;
}
