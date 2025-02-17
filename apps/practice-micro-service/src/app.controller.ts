import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import log from '../../../debugging/debug'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    log("get hellow")
    return this.appService.getTodos();
  }
}
