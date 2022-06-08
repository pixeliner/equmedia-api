import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  CreateCustomerProfileDto,
  UpdateCustomerProfileDto,
} from '../rest/dto';
import { RestCustomer } from '../rest/models';
import { IUpdateCustomerObject } from '../interfaces';
import { ClientService } from '@utils/client';
import { PaginationDto } from '@utils/pagination.dto';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_MICROSERVICE')
    public readonly customerClient: ClientProxy,
    public readonly clientService: ClientService,
  ) {}

  async getCustomers(pagination: PaginationDto): Promise<RestCustomer[]> {
    return this.clientService.sendMessageWithPayload(
      this.customerClient,
      {
        role: 'customer',
        cmd: 'getAll',
      },
      pagination,
    );
  }

  async getCustomerProfile(id: string): Promise<RestCustomer> {
    return this.clientService.sendMessageWithPayload(
      this.customerClient,
      { role: 'customer', cmd: 'get' },
      id,
    );
  }

  async createCustomerProfile(
    createCustomerProfileData: CreateCustomerProfileDto,
  ): Promise<RestCustomer> {
    return this.clientService.sendMessageWithPayload(
      this.customerClient,
      { role: 'customer', cmd: 'create' },
      createCustomerProfileData,
    );
  }

  async removeCustomerProfile(id: string): Promise<boolean> {
    return this.clientService.sendMessageWithPayload(
      this.customerClient,
      { role: 'customer', cmd: 'remove' },
      id,
    );
  }

  async updateCustomerProfile(
    id: string,
    updateCustomerProfileData: UpdateCustomerProfileDto,
  ): Promise<RestCustomer> {
    const updateProfileObject: IUpdateCustomerObject = {
      id,
      updateCustomerProfileData,
    };

    return this.clientService.sendMessageWithPayload(
      this.customerClient,
      { role: 'customer', cmd: 'update' },
      updateProfileObject,
    );
  }
}
