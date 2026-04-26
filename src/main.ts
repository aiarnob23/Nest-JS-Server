import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    rawBody:true,
  });
  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set('trust proxy', 1);
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}
bootstrap();
