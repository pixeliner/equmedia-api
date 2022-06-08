import { IsNumber, IsUUID, IsString, Length } from 'class-validator';

export class CreateCustomerProfileDto {
  @IsUUID('4')
  auth_id: string;

  @IsString()
  @Length(1, 30)
  firstName: string;

  @IsString()
  @Length(1, 30)
  lastName: string;

  @IsString()
  @Length(5, 60)
  email: string;

  constructor(
    auth_id: string,
    firstName: string,
    lastName: string,
    email: string,
  ) {
    this.auth_id = auth_id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
