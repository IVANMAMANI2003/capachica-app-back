import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from './auth/decorators/public.decorator';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Public()
  @Get()
  @ApiOperation({ summary: 'Health check endpoint' })
  getHello(): { status: string; message: string } {
    return {
      status: 'ok',
      message: 'API is running. Check /api/docs for documentation',
    };
  }
} 