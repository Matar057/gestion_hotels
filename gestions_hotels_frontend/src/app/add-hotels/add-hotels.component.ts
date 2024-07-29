import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from '../add-hotel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelComponent {
  hotelForm: FormGroup;

  constructor(private fb: FormBuilder, private hotelService: HotelService,
    private router: Router

  ) {
    
    this.hotelForm = this.fb.group({
      hotelName: ['', Validators.required],
      addresse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      prix: ['', Validators.required],
      currency: ['XOF'],
      image: ['']
    });

  
  }

  onSubmit(): void {
    if (this.hotelForm.valid) {
      const formData: FormData = new FormData();
      
      Object.keys(this.hotelForm.controls).forEach(key => {
        const controlValue = this.hotelForm.get(key)?.value;
        if (key === 'image' && controlValue instanceof FileList) {
          formData.append(key, controlValue[0]);
        } else {
          formData.append(key, controlValue);
        }
      });

      this.hotelService.addHotel(formData).subscribe(
        response => {
          console.log('Hôtel ajouté avec succès', response);
         this.router.navigate(['/liste-hotels'])
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'hôtel', error);
        }
      );
    } else {
      console.error('Formulaire invalide');
    }
  }
}
