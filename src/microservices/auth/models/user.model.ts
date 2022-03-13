import { IsEmail, IsUUID } from 'class-validator';

export class UserModel {
  @IsUUID('4')
  id: string;

  @IsEmail()
  email: string;
}
