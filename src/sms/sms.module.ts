import { Module } from '@nestjs/common';

import { RMQModule } from 'src/rmq/rmq.module';
import { SMSService } from './sms.service';

@Module({
  imports: [RMQModule],
  providers: [SMSService],
})
export class SMSModule {}
