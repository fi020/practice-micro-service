import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { TODO_SERVICE_PROTO_SERVICE_NAME, TodoServiceProtoClient } from 'proto/todo';

@Injectable()
export class AppService {
  private todoServiceClint:TodoServiceProtoClient;
  constructor(@Inject('todo') private clintGrpc:ClientGrpc){}

  onModuleInit(){
    this.todoServiceClint = this.clintGrpc.getService(TODO_SERVICE_PROTO_SERVICE_NAME);
  }

  getHello(): string {
    return 'Hello World!';
  }
  getTodos(){
    return this.todoServiceClint.getTodoProto({})

  }
  addTodo(req:{desc:string,isDone:boolean}){
    console.log(req.desc,req.isDone);
    
    return this.todoServiceClint.postTodoProto({
      descriptionP:req.desc,
      isDoneP:req.isDone,
    })
  }
}
