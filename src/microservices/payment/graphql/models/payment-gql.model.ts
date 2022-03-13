import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsEnum, IsString, IsUUID } from 'class-validator';

enum currencies {
  eur = 'EUR',
}

@ObjectType()
export class GqlPayment {
  @Field()
  @IsUUID('4')
  product_id: string;

  @Field()
  @IsString()
  product_type: string;

  @Field()
  @IsString()
  description: string;

  @Field()
  @IsString()
  amount: string;

  @Field()
  @IsString()
  redirectUrl: string;

  @Field()
  @IsString()
  webhookUrl: string;

  @Field()
  @IsEnum(currencies)
  currency: string;
}
