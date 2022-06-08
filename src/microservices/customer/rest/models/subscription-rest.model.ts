import { IsDecimal, IsNumber, IsUUID, Length } from 'class-validator';

export class RestSubscription {
  @IsUUID('4')
  id: string;

  @Length(1, 30)
  name: string;

  @Length(1, 30)
  description: string;

  @IsNumber()
  days: number;

  @IsDecimal()
  price: number;

  constructor(
    id: string,
    name: string,
    description: string,
    days: number,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.days = days;
    this.price = price;
  }
}
