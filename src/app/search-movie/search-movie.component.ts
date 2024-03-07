// search-movie.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchMovieForm } from './search-movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-movie',
  standalone: true,
  templateUrl: './search-movie.component.html',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent {
  searchForm: FormGroup;
  currentYear: number;

  constructor(private fb: FormBuilder) {
    this.currentYear = new Date().getFullYear();

    this.searchForm = this.fb.group({
      identifierGroup: this.fb.group({
        identifier: [''],
        title: ['']
      }, { validator: this.isRequiredValidator('title', 'identifier') }),
      type: ['serie'],
      releaseYear: ['', [Validators.required, this.rangeDateValidator(1900, this.currentYear)]],
      category: ['']
    });

    // Set default values
    this.searchForm.patchValue({
      category: 'short'
    });

    // Subscribe to value changes
    this.searchForm.valueChanges.subscribe(value => console.log('Form value changes:', value));
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const identifierGroup = this.searchForm.get('identifierGroup');
  
      const identifierValue = identifierGroup?.get('identifier')?.value;
      const titleValue = identifierGroup?.get('title')?.value;
  
      const formValue: SearchMovieForm = {
        identifier: identifierValue !== null && identifierValue !== undefined ? identifierValue : '',
        title: titleValue !== null && titleValue !== undefined ? titleValue : '',
        type: this.searchForm.get('type')?.value || '',
        releaseYear: this.searchForm.get('releaseYear')?.value || null,
        category: this.searchForm.get('category')?.value || ''
      };
  
      console.log('Form submitted:', formValue);
    }
  }
  
  

  isRequiredValidator(control1: string, control2: string) {
    return (group: FormGroup): { [key: string]: any } => {
      const value1 = group.get(control1)?.value;
      const value2 = group.get(control2)?.value;

      if (!value1 && !value2) {
        return { 'isRequired': true };
      }

      return {};
    };
  }

  rangeDateValidator(minYear: number, maxYear: number) {
    return (control: any): { [key: string]: any } => {
      const year = control.value;
      if (isNaN(year) || year < minYear || year > maxYear) {
        return { 'min': { min: minYear, max: maxYear } };
      }

      return {};
    };
  }
}
