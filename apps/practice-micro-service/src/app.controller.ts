import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';
import { PostTodoDTOProto } from 'proto/todo';

@Controller('todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('get-all')
  getTodos(){
    return this.appService.getTodos();
  }
  @Post('add-one')
  addTodo(@Body() req:PostTodoDTOProto){
    console.log("req data",req.descriptionP);
    
    return this.appService.addTodo({desc:req.descriptionP,isDone:req.isDoneP});
  }
}
