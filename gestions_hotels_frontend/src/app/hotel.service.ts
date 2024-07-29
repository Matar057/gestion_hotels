/**import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:8000/api/hotel'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  addHotel(hotelData: any): Observable<any> {
    const formData: FormData = new FormData();
    
    for (const key in hotelData) {
      if (hotelData.hasOwnProperty(key)) {
        formData.append(key, hotelData[key]);
      }
    }

    const headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    });

    return this.http.post<any>(this.apiUrl, formData, { headers })
      .pipe(
        catchError(this.handleError<any>('addHotel'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}**/
