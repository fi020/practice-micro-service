import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Import CORS
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Main server running on port debug consleosd `);

}
bootstrap();
