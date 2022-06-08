import { IsString, Length } from 'class-validator';

export class UpdateCustomerProfileDto {
  @IsString()
  @Length(1, 30)
  firstName: string;

  @IsString()
  @Length(1, 30)
  lastName: string;

  @IsString()
  @Length(5, 60)
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
