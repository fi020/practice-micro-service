import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TodoModule,{
    transport:Transport.GRPC,
    options:{
      protoPath: join(__dirname, '../todo.proto'),
      package:'todo',
      url: `0.0.0.0:${process.env.PORT || 50051}`

    }
  });

  await app.listen();
}
bootstrap();
