import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';  // Correct import for HttpModule
import { GatewayController } from './gateway.controller';

@Module({
  imports: [HttpModule],  // Import HttpModule to use HttpService
  controllers: [GatewayController],
  providers: [],
})
export class GatewayModule {}
