import { Injectable } from '@nestjs/common';
import { TodoProto, TodosProto } from 'proto/todo';

@Injectable()
export class TodoService {
  private todos: TodoProto[] = [
    {
      idP: 1,
      descriptionP: "oggy",
      isDoneP: false
    },
    {
      idP: 2,
      descriptionP: "jack",
      isDoneP: true
    }
  ];
  getTodos(): TodosProto {
    return { TodoP: this.todos }
  }
  addTodo(request): TodoProto {
    console.log(request);

    const nextId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.idP)) + 1 : 1;
  
    const todo: TodoProto = {
      idP: nextId,
      descriptionP: request.descriptionP,
      isDoneP: request.isDoneP
    };
  
    this.todos.push(todo);
    return todo;

    // return {TodoP: this.todos}
  }

}
