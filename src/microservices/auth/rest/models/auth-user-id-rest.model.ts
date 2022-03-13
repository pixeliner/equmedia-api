import { IsUUID } from 'class-validator';

export class RestAuthUserId {
  @IsUUID('4')
  auth_id: string;
}
