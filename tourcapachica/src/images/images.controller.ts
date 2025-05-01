import { Controller, Post, Delete, Param, UseInterceptors, UploadedFile, ParseIntPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':imageableType/:imageableId')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('imageableType') imageableType: string,
    @Param('imageableId', ParseIntPipe) imageableId: number,
  ) {
    return this.imagesService.uploadImage(file, imageableId, imageableType);
  }

  @Delete(':id')
  async deleteImage(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.deleteImage(id);
  }
} 