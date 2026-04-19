import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const instance = process.env.INSTANCE_ID ?? 'unknown';
    console.log('Handled by : ', instance);
    return `Hello from : ${instance}`;
  }
}
