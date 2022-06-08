import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ClientService } from '@utils/client';
import { CreatePaymentDto } from '../rest/dto';
import { RestPayment } from '../rest/models';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_MICROSERVICE')
    public readonly paymentClient: ClientProxy,
    private readonly clientService: ClientService,
  ) {}

  async getPaymentById(id: string): Promise<RestPayment> {
    return this.clientService.sendMessageWithPayload(
      this.paymentClient,
      { role: 'payment', cmd: 'get' },
      id,
    );
  }

  async createPayment(newPayment: CreatePaymentDto): Promise<RestPayment> {
    const subscription = {
      product_id: '00798231-0e77-4071-be47-31e9e247f91d',
      product_type: 'subscription',
      description: 'Equnews subscription - 30 days',
      amount: '5.00',
      redirectUrl: 'https://www.google.com',
      webhookUrl: 'https://maps.google.com',
      currency: 'EUR',
    };

    return this.clientService.sendMessageWithPayload(
      this.paymentClient,
      { role: 'payment', cmd: 'create' },
      { newPayment, subscription },
    );
  }

  async updatePayment(
    id: string,
    updatedPayment: CreatePaymentDto,
  ): Promise<RestPayment> {
    return this.clientService.sendMessageWithPayload(
      this.paymentClient,
      { role: 'payment', cmd: 'update' },
      { id, updatedPayment },
    );
  }
}
