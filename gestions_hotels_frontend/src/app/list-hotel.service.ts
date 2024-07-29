import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hotel {
  id: number;
  addresse: string;
  hotelName: string;
  prix: number;
  image: string;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  deleteHotel(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8000/api/liste-hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl);
  }
}
