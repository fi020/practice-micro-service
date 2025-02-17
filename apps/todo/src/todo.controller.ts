import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { EmptyProto, PostTodoDTOProto, TodoProto, TodoServiceProtoController, TodosProto } from 'proto/todo';
import { Observable } from 'rxjs';

@Controller()
export class TodoController implements TodoServiceProtoController {
  constructor(private readonly todoService: TodoService) {}
  postTodoProto(request: PostTodoDTOProto): Promise<TodoProto> | Observable<TodoProto> | TodoProto {
    throw new Error('Method not implemented.');
  }
  getTodoProto(request: EmptyProto): Promise<TodosProto> | Observable<TodosProto> | TodosProto {
    throw new Error('Method not implemented.');
  }

  @Get()
  getHello(): string {
    return this.todoService.getHello();
  }
}
