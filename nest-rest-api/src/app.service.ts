import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Esto es una REST API hecha con NestJs y base de datos MySQL';
  }
}
