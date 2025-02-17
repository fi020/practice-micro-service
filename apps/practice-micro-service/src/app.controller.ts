import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';
import { PostTodoDTOProto } from 'proto/todo';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  getTodos(){
    return this.appService.getTodos();
  }
  @Post('add-one')
  addTodo(@Body() postTodoDTO:PostTodoDTOProto){
    console.log("req data",postTodoDTO);
    
    return this.appService.addTodo(postTodoDTO);
  }
}
