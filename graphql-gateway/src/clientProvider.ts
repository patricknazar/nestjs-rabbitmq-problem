import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const clientProvider = {
  provide: 'CLIENT_PROXY',
  useFactory: async () => ClientProxyFactory.create(
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://rabbitmq:5672`],
      },
    },
  ),
};
