import { Resolver, Query } from '@nestjs/graphql';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Resolver('User')
export class UserResolver {

  @Query()
  async users() {
    const pattern = { cmd: 'getUsers' };
    const payload = {};
    return await this.client.send<number>(pattern, payload);
  }

  constructor(@Inject('CLIENT_PROXY') private client: ClientProxy) { }
}
