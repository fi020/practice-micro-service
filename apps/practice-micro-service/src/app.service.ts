import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PostTodoDTOProto, TODO_SERVICE_PROTO_SERVICE_NAME, TodoServiceProtoClient } from 'proto/todo';

@Injectable()
export class AppService {
  private todoServiceClint:TodoServiceProtoClient;
  constructor(@Inject('todo') private clintGrpc:ClientGrpc){}

  onModuleInit(){
    this.todoServiceClint = this.clintGrpc.getService(TODO_SERVICE_PROTO_SERVICE_NAME);
  }

  getTodos(){
    return this.todoServiceClint.getTodoProto({})

  }
  addTodo(postTodoDTO:PostTodoDTOProto){
    return this.todoServiceClint.postTodoProto(postTodoDTO)
  }
}
