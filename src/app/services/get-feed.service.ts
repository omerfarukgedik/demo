import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/models/Feed';

@Injectable({
  providedIn: 'root'
})
export class GetFeedService {

  constructor(private http: HttpClient) { }

  getFeed(limit: number = 10, skip: number = 0, latitude: number = 0, longitude: number = 0): Observable<any> {
    const headers = { 'apiKey': 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2' };
    const body = { limit, skip, latitude, longitude };

    return this.http.post<Feed[]>(`https://smarty.kerzz.com:4004/api/mock/getFeed`, body, { headers });
  }
}
