import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly baseUrl =
    'https://pub-e08b2c63db944967937906c892405373.r2.dev';

  getUrl(key: string): string {
    return key ? `${this.baseUrl}/${key}` : '';
  }
}