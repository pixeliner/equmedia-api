import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  RestAuthChangeResponse,
  RestAuthUser,
  RestAuthUserId,
} from '../../rest/models';
import {
  AuthCredentialsDto,
  AuthEmailDto,
  ChangePasswordDto,
  SetNewPasswordDto,
  GetRefreshUserDto,
} from '../../rest/dto';
import { ClientService } from '@utils/client';
import { MailService } from '@mail/services/mail.service';
import { PaginationDto } from '@utils/pagination.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('AUTH_MICROSERVICE')
    private readonly authClient: ClientProxy,
    private readonly clientService: ClientService,
    private readonly mailService: MailService,
  ) {}

  async getUserId(authEmailData: AuthEmailDto): Promise<RestAuthUserId> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'getId' },
      authEmailData,
    );
  }

  async getUserById(id: string) {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'getUserById' },
      id,
    );
  }

  async getUsers(pagination: PaginationDto) {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'getUsers' },
      pagination,
    );
  }

  async getUserIfRefreshTokenMatches(
    getRefreshUserData: GetRefreshUserDto,
  ): Promise<RestAuthUserId> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'getUserIfRefreshTokenMatches' },
      getRefreshUserData,
    );
  }

  async getAuthenticatedUser(
    authCredentialsData: AuthCredentialsDto,
  ): Promise<RestAuthUser> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'getAuthenticatedUser' },
      authCredentialsData,
    );
  }

  async changeUserPassword(
    id: string,
    changePasswordData: ChangePasswordDto,
  ): Promise<RestAuthChangeResponse> {
    if (changePasswordData.old_password === changePasswordData.new_password)
      throw new BadRequestException(
        'New password cannot be the same as the old password',
      );
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'changePassword' },
      { id, changePasswordData },
    );
  }

  async deleteUserAccount(id: string): Promise<RestAuthChangeResponse> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'deleteAccount' },
      id,
    );
  }

  async confirmAccountCreation(token: string): Promise<boolean> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'confirmAccount' },
      token,
    );
  }

  async removeRefreshToken(userId: string): Promise<boolean> {
    return this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'removeRefreshToken' },
      userId,
    );
  }

  async forgotPassword(
    authEmailData: AuthEmailDto,
  ): Promise<RestAuthChangeResponse> {
    const forgotPasswordToken: Promise<string> =
      this.clientService.sendMessageWithPayload(
        this.authClient,
        { role: 'user', cmd: 'forgot-password' },
        authEmailData,
      );

    const response = this.mailService.sendForgotPasswordEmail({
      user_email: authEmailData.email,
      token: await forgotPasswordToken,
    });

    return response;
  }

  async setNewPassword(
    token: string,
    setNewPasswordData: SetNewPasswordDto,
  ): Promise<RestAuthChangeResponse> {
    const user_email = this.clientService.sendMessageWithPayload(
      this.authClient,
      { role: 'user', cmd: 'set-new-password' },
      {
        forgotPasswordToken: token,
        newPassword: setNewPasswordData.new_password,
      },
    );

    const response = this.mailService.sendSetNewPasswordEmail({
      user_email: await user_email,
    });

    return response;
  }
}
