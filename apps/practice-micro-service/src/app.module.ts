import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'todo',
        transport: Transport.GRPC,
        options: {
          package: 'todo',
          protoPath: join(__dirname, '../todo.proto'),
          url: process.env.TODO_SERVICE_URL || 'localhost:50051', // Update this

        }

      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
