import { Module } from '@nestjs/common';
import { RMQModule } from 'src/rmq/rmq.module';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';

@Module({
  imports: [RMQModule],
  controllers: [InventoryController],
  providers: [InventoryService],
  exports: [],
})
export class InventoryModule {}
