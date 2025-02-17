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
  addTodo(a):TodoProto{
    console.log(a);
    

    const todo:TodoProto = {
descriptionP:a.descriptionP,
idP:3,
isDoneP:a.isDoneP
    }
    return todo;

    // return {TodoP: this.todos}
  }
  getHello(): string {
    return 'Hello World!';
  }
}
