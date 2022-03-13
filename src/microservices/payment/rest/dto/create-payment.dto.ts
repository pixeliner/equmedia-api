import { IsEnum, IsString, IsUUID } from 'class-validator';

enum currencies {
  eur = 'EUR',
}

export class CreatePaymentDto {
  @IsUUID('4')
  product_id: string;

  @IsString()
  product_type: string;

  @IsString()
  description: string;

  @IsString()
  amount: string;

  @IsString()
  redirectUrl: string;

  @IsString()
  webhookUrl: string;

  @IsEnum(currencies)
  currency: string;
}
