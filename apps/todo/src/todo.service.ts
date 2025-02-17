import { Injectable } from '@nestjs/common';
import { TodoProto, TodosProto } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: TodoProto[]=[
    {
      idP:1,
      descriptionP:"oggy",
      isDoneP:false
    },
    {
      idP:1,
      descriptionP:"oggy",
      isDoneP:false
    }
  ];
  getTodos():TodosProto{
    return {TodoP: this.todos}
  }
  getHello(): string {
    return 'Hello World!';
  }
}
