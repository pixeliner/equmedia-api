import { IsUUID, Length } from 'class-validator';

export class RestCustomer {
  @IsUUID('4')
  id: string;

  @Length(1, 30)
  firstName: string;

  @Length(1, 30)
  lastName: string;

  @Length(5, 60)
  email: string;

  constructor(id: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
