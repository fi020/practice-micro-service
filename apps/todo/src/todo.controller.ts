import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { EmptyProto, PostTodoDTOProto, TodoProto, TodoServiceProtoController, TodosProto } from 'proto/todo';
import { Observable } from 'rxjs';
import log from '../../../debugging/debug';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class TodoController implements TodoServiceProtoController {
  constructor(private readonly todoService: TodoService) {}

  // This method is not implemented yet, so it throws an error.
  postTodoProto(request: PostTodoDTOProto): Promise<TodoProto> | Observable<TodoProto> | TodoProto {
    throw new Error('Method not implemented.');
  }

  // This method fetches the todos and returns an observable of TodosProto.
  @GrpcMethod('TodoServiceProto', 'GetTodoProto')
  async getTodoProto(){
    return await this.todoService.getTodos();
  }


  // @Get()
  // getHello(): string {
  //   log("a")
  //   return this.todoService.getHello();
  // }
}
