import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import {
  INVENTORY_EXCHANGE_NAME,
  INVENTORY_ROUTING_KEY,
} from 'rmq-exchange.constants';

@Injectable()
export class InventoryService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public updateInventory(): void {
    this.amqpConnection.publish(
      INVENTORY_EXCHANGE_NAME,
      INVENTORY_ROUTING_KEY,
      {
        message: 'Hello Rabbit MQ World From Inventory Update',
      },
    );
  }
}
