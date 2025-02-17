import { NestFactory } from '@nestjs/core';
import { TodoModule } from './todo.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import log from '../../../debugging/debug'
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TodoModule,{
    transport:Transport.GRPC,
    options:{
      protoPath: join(__dirname, '../todo.proto'),
      package:'todo'
    }
  });
log("main todo micro service")
console.log("main todo micro service")
  await app.listen();
}
bootstrap();
