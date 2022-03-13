import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

export class AuthEmailDto {
  @IsString()
  @MinLength(8)
  @MaxLength(40)
  @IsEmail()
  email: string;
}
