import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';

import { UtilsModule } from '@utils/utils.module';
import { createClientAsyncOptions } from '@utils/client';
import { MailService } from './services/mail.service';

@Module({
  imports: [
    ClientsModule.registerAsync([createClientAsyncOptions('mail')]),
    UtilsModule,
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
