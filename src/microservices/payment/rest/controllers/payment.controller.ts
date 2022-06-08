import {
  Controller,
  Param,
  Get,
  UseGuards,
  Post,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AccessControlGuard } from '@auth/guards';
import { PaymentService } from '../../services';
import { RestPayment } from '../models';
import { CreatePaymentDto } from '../dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(AccessControlGuard)
  @Get('/:id')
  async getPaymentById(@Param('id') id: string): Promise<RestPayment> {
    return this.paymentService.getPaymentById(id);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AccessControlGuard)
  @Post('/')
  async createPayment(
    @Body() newPayment: CreatePaymentDto,
  ): Promise<RestPayment> {
    return this.paymentService.createPayment(newPayment);
  }

  @UsePipes(new ValidationPipe())
  @UseGuards(AccessControlGuard)
  @Put('/:id')
  async updatePayment(
    @Param('id') id: string,
    @Body() updatedPayment: CreatePaymentDto,
  ): Promise<RestPayment> {
    return this.paymentService.updatePayment(id, updatedPayment);
  }
}
