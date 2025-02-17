import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { EmptyProto, PostTodoDTOProto, TodoProto, TodoServiceProtoController, TodosProto } from 'proto/todo';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class TodoController implements TodoServiceProtoController {
  constructor(private readonly todoService: TodoService) { }
  @GrpcMethod('TodoServiceProto')
  postTodoProto(request: PostTodoDTOProto): Promise<TodoProto> | Observable<TodoProto> | TodoProto {
return this.todoService.addTodo(request)
  }
  @GrpcMethod('TodoServiceProto','getTodoProto')
  getTodoProto(request: EmptyProto): Promise<TodosProto> | Observable<TodosProto> | TodosProto {
    return this.todoService.getTodos()
  }

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }
}
