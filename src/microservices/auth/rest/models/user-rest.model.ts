import { IsDate, IsString, IsUUID } from 'class-validator';

export class RestUser {
  @IsUUID('4')
  id: string;

  @IsString()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  deletedAt: Date;
}
