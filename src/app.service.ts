import { Injectable } from '@nestjs/common';
const ImageKit = require('imagekit');

@Injectable()
export class AppService {
  private imagekit;

  constructor() {
    this.imagekit = new ImageKit({
      publicKey: 'public_Kk7vTCZ4Nws9FCCjwussJeGF1vU=',
      privateKey: 'private_ujQFrwhPcksNYb5gxC7nYqAUXj0=',
      urlEndpoint: 'https://ik.imagekit.io/azn6jixxj',
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
