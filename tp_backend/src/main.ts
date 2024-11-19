import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api'); // Set the global prefix for all routes
  app.useGlobalPipes(new ValidationPipe()); // Enable validation pipe for all controllers and guards
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
