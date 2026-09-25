import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ImageUploadResponse {
  key: string;
}

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  uploadImage(file: File): Observable<ImageUploadResponse> {
    const formData = new FormData();

    formData.append('file', file);

    return this.http.post<ImageUploadResponse>(`${this.apiUrl}/files/images`, formData);
  }

  deleteImage(key: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/files/images`, {
      params: { key },
    });
  }
}
