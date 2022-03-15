import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query, ID } from '@nestjs/graphql';

import { GqlJwtAuthGuard } from '@auth/graphql/guards';
import { PaymentService } from '../../services';
import { GqlPayment } from '../models';

@Resolver((of) => GqlPayment)
export class PaymentQueryResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(GqlJwtAuthGuard)
  @Query((returns) => GqlPayment)
  async getPayment(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<GqlPayment> {
    return this.paymentService.getPaymentById(id);
  }
}
