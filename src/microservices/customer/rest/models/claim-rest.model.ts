import { IsDate, IsUUID, Length } from 'class-validator';

export class RestClaim {
  @IsUUID('4')
  id: string;

  @Length(1, 30)
  name: string;

  @Length(1, 30)
  key: string;

  @IsDate()
  expiresAt: Date;

  constructor(id: string, name: string, key: string, expiresAt: Date) {
    this.id = id;
    this.name = name;
    this.key = key;
    this.expiresAt = expiresAt;
  }
}
