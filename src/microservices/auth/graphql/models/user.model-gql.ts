import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsUUID } from 'class-validator';

@ObjectType()
export class GqlUserModel {
  @Field()
  @IsUUID('4')
  id: string;

  @Field()
  @IsEmail()
  email: string;
}
