# Nest js rabbitmq problem

https://github.com/nestjs/nest/issues/1245

Occurs when there are more than one microservices (other than gateway)

## Requirements
* Docker/docker-compose

## Steps

1. `docker-compose up -d`
2. Visit http://127.0.0.1:3000/graphql and run:

```
    {
      users {
        id
        name
      }
    }
```
3. Run it several times, one will succeed, the next will fail. This pattern will repeat.
