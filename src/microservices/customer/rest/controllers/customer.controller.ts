import {
  Controller,
  Param,
  Get,
  UseGuards,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

import { RestJwtAuthGuard } from '@auth/rest/guards';
import { CustomerService } from '../../services';
import { CreateCustomerProfileDto, UpdateCustomerProfileDto } from '../dto';
import { RestCustomer } from '../models';
import { PaginationDto } from '@utils/pagination.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/')
  async getCustomers(
    @Body('pagination') pagination: PaginationDto,
  ): Promise<RestCustomer[]> {
    return this.customerService.getCustomers(pagination);
  }

  @UseGuards(RestJwtAuthGuard)
  @Get('/profile/:id')
  async getCustomerProfile(@Param('id') id: string): Promise<RestCustomer> {
    return this.customerService.getCustomerProfile(id);
  }

  @Post('/create')
  async createCustomerProfile(
    @Body() createCustomerProfileDto: CreateCustomerProfileDto,
  ): Promise<RestCustomer> {
    return this.customerService.createCustomerProfile(createCustomerProfileDto);
  }

  @UseGuards(RestJwtAuthGuard)
  @Delete('/delete/:id')
  async removeCustomerProfile(@Param('id') id: string): Promise<boolean> {
    return this.customerService.removeCustomerProfile(id);
  }

  @UseGuards(RestJwtAuthGuard)
  @Put('/update/:id')
  async updateCustomerProfile(
    @Param('id') id: string,
    @Body() updateCustomerProfileDto: UpdateCustomerProfileDto,
  ): Promise<RestCustomer> {
    return this.customerService.updateCustomerProfile(
      id,
      updateCustomerProfileDto,
    );
  }
}
