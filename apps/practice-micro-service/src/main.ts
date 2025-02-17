import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import log from '../../../debugging/debug'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  log("gatway server")
  console.log("gatway server")
  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
