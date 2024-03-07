import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkshopFormulaireComponent } from './workshop-formulaire/workshop-formulaire.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, ReactiveFormsModule, SearchMovieComponent, WorkshopFormulaireComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formulaire';
}
