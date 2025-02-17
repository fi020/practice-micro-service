import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { TODO_SERVICE_PROTO_SERVICE_NAME, TodoServiceProtoClient } from 'proto/todo';
import log from '../../../debugging/debug'

@Injectable()
export class AppService {
  private todoServiceClient: TodoServiceProtoClient;

  constructor(@Inject('todo') private clientGrpc: ClientGrpc) {

  }
  onModuleInit() {
    this.todoServiceClient =
      this.clientGrpc.getService<TodoServiceProtoClient>(TODO_SERVICE_PROTO_SERVICE_NAME);
  }

  getTodos() {
    log("get hellow")
    return this.todoServiceClient.getTodoProto({});
    log("get hellow")
  }
  getHello(): string {
    return 'Hello World!';
  }
}
