import { IsString, IsUUID } from 'class-validator';

export class RestAuthUser {
  @IsUUID('4')
  auth_id: string;

  @IsString()
  token: string;
}
