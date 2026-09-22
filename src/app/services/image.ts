import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly baseUrl = 'https://images.montroe-cms.com';

  getUrl(key: string): string {
    return key ? `${this.baseUrl}/${key}` : '';
  }
}
