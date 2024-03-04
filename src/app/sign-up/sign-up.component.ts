import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/models';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  newUser: User = 
  {
    firstName: '',
	  lastName: '',
	  email: '',
	  password: ''
  };
  
  formSubmitted = false;

  onSubmit(): void {
    if (this.formSubmitted) {
    console.log('Le formulaire a bien été soumis', this.newUser);
  }
  }

}
