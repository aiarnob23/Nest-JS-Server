import { Controller, Get, Req } from '@nestjs/common';
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

  @Get('ip')
  getIp(@Req() req) {
    return {
      ip: req.ip,
      ips: req.ips,
      headers: req.headers,
      method: req.method,
      url: req.url,
      query: req.query,
      body: req.body,
      params: req.params
    }
  }
}
