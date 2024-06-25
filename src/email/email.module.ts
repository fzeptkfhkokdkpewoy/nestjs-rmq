import { Module } from '@nestjs/common';

import { RMQModule } from 'src/rmq/rmq.module';
import { EmailService } from './email.service';

@Module({
  imports: [RMQModule],
  providers: [EmailService],
})
export class EmailModule {}
