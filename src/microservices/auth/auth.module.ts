import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { createClientAsyncOptions } from '@utils/client';
import { MailModule } from '@mail/mail.module';
import { AuthServices } from './services';
import { AuthControllers, UsersControllers } from './rest/controllers';
import { JwtRefreshTokenStrategy, JwtStrategy } from './strategies';
import { SessionSerializer } from '@security/serializers';

@Module({
  imports: [
    ClientsModule.registerAsync([createClientAsyncOptions('auth')]),
    PassportModule,
    JwtModule.register({}),
    MailModule,
  ],
  controllers: [...AuthControllers, ...UsersControllers],
  providers: [
    SessionSerializer,
    JwtStrategy,
    JwtRefreshTokenStrategy,
    ...AuthServices,
  ],
})
export class AuthModule {}
