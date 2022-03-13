import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GqlAuthUser {
  @Field((type) => ID)
  auth_id: string;

  @Field()
  token: string;
}
