import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { PaymentModule } from './payment/payment.module';

export const MicroservicesModules = [AuthModule, MailModule, PaymentModule];
