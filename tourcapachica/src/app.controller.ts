import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Health check endpoint' })
  getHello() {
    return {
      status: 'ok',
      message: 'Tour Capachica API is running',
      timestamp: new Date().toISOString(),
      docs: '/api/docs' // Ruta donde estará la documentación Swagger
    };
  }
} 