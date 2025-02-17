import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('get-todos')
  getTodos(){
    return this.appService.getTodos();
  }
  @Post('add-todo')
  addTodo(@Body() req){
    console.log("req data",req.desc);
    
    return this.appService.addTodo(req.desc,req.isDone);
  }
}
