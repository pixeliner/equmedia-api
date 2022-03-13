import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { axiosAsyncConfig } from './config';

@Module({
  imports: [HttpModule.registerAsync(axiosAsyncConfig)],
})
export class AxiosWrapperModule {}
