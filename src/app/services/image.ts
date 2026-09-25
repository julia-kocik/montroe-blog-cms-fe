import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly baseUrl = environment.imageUrl;

  getUrl(key: string): string {
    return key ? `${this.baseUrl}/${key}` : '';
  }
}
