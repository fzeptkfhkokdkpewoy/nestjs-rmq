import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { INVENTORY_EXCHANGE_NAME } from 'rmq-exchange.constants';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: INVENTORY_EXCHANGE_NAME,
          type: 'fanout',
        },
      ],
      uri: `amqp://admin:admin@localhost:5672`, //
      connectionInitOptions: { wait: false },
      enableControllerDiscovery: false,
    }),
  ],

  exports: [RabbitMQModule],
})
export class RMQModule {}
