import { Controller, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private service: InventoryService) {}

  @Post()
  public async updateInventory() {
    this.service.updateInventory();
  }
}
