import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Os controladores são classes decoradas com @Controller, que são usadas para definir rotas e manipuladores de solicitação.

// https://localhost:3000/prefixo/test

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
