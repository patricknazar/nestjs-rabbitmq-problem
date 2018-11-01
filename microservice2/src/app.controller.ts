import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({ cmd: 'getSomethingElse' })
  getSomethingElse(): any[] {
    return [
      {
        id: 'first',
      },
    ];
  }
}
