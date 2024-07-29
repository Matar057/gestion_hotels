import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hotel } from '../list-hotel.service';
import { HotelService } from '../list-hotel.service';

@Component({
  selector: 'app-list-hotels',
  templateUrl: './list-hotels.component.html',
  styleUrls: ['./list-hotels.component.css']
})
export class ListHotelsComponent implements OnInit {
  hotels: Hotel[] = [];
  baseUrl: string = 'http://localhost:8000/storage/';

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data.map(hotel => {
        return { ...hotel, image: this.baseUrl + hotel.image };
      });
    });
  }
}
