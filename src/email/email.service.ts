import {
  MessageHandlerErrorBehavior,
  RabbitSubscribe,
} from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import {
  INVENTORY_EXCHANGE_NAME,
  INVENTORY_ROUTING_KEY,
} from './../../rmq-exchange.constants';

@Injectable()
export class EmailService {
  @RabbitSubscribe({
    exchange: INVENTORY_EXCHANGE_NAME,
    routingKey: INVENTORY_ROUTING_KEY,
    errorBehavior: MessageHandlerErrorBehavior.ACK,
  })
  public emailOnUpdateInventory(payload: { message: string }): void {
    Logger.log(`Email RMQ Payload:` + JSON.stringify(payload));
  }
}
