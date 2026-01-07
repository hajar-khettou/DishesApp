import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) {}

  getPublicPhotos(): Observable<any> {
    return this.http.jsonp(
      'https://www.flickr.com/services/feeds/photos_public.gne?format=json',
      'jsoncallback'
    );
  }

  searchPhotosByTags(tags: string): Observable<any> {
    return this.http.jsonp(
      `https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=${encodeURIComponent(tags)}`,
      'jsoncallback'
    );
  }
}
