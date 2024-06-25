import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { InventoryModule } from './inventory/inventory.module';
import { SMSModule } from './sms/sms.module';

@Module({
  imports: [InventoryModule, EmailModule, SMSModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
