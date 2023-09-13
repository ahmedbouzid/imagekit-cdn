import {
  BadRequestException,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { log } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file) {
    if (!file) {
      throw new BadRequestException('No file provided');
    }

    const result = await this.appService.uploadImage(
      file.buffer,
      file.originalname,
    );
    console.log('====================================');
    console.log(result.thumbnailUrl);
    console.log('====================================');
    return result;
  }
}
