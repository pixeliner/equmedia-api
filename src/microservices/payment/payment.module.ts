import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { createClientAsyncOptions } from '@utils/client';
import { PaymentService } from './services';
import { PaymentController } from './rest/controllers';
import { PaymentMutationResolver } from './graphql/mutations';
import { PaymentQueryResolver } from './graphql/queries';

@Module({
  imports: [
    ClientsModule.registerAsync([
      createClientAsyncOptions('auth'),
      createClientAsyncOptions('payment'),
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentQueryResolver, PaymentMutationResolver],
})
export class PaymentModule {}
