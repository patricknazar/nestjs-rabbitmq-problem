import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @MessagePattern({ cmd: 'getUsers' })
  getUsers(): any[] {
    return [
      {
        id: 'one',
        name: 'Pat',
      },
      {
        id: 'two',
        name: 'Rick',
      },
      {
        id: 'three',
        name: 'John',
      },
    ];
  }
}
