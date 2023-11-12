import { Injectable } from '@nestjs/common';
const ImageKit = require('imagekit');

@Injectable()
export class AppService {
  private imagekit;

  constructor() {
    this.imagekit = new ImageKit({
      publicKey: '*****',
      privateKey: '******',
      urlEndpoint: '*****',
    });
  }
  async uploadImage(fileBuffer: Buffer, fileName: string) {
    try {
      const response = await this.imagekit.upload({
        file: fileBuffer,
        fileName,
      });
      return response;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw new Error('Image upload failed: ' + error.message);
    }
  }
  getHello(): string {
    return 'Hello World!';
  }
}
