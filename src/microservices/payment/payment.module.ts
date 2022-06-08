import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { createClientAsyncOptions } from '@utils/client';
import { PaymentService } from './services';
import { PaymentController } from './rest/controllers';

@Module({
  imports: [
    ClientsModule.registerAsync([
      createClientAsyncOptions('auth'),
      createClientAsyncOptions('payment'),
    ]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
