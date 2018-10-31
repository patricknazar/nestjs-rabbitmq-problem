# Nest js rabbitmq problem

https://github.com/nestjs/nest/issues/1245

Can't currently reproduce the problem.

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
3. Run it several times, although there is no problem reproduced atm.