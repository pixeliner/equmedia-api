import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Equmedia API')
  .setDescription('Equmedia API documentation')
  .setVersion(process.env.npm_package_version)
  .build();
