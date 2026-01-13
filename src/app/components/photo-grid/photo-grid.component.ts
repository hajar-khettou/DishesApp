import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent implements OnInit {

  meals: Meal[] = [];
  searchTerm = '';
  hasSearched = false;

  constructor(
    private mealsService: MealsService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.fetchMeals('a'); 
  }

  fetchMeals(term: string): void {
    this.mealsService.searchMeals(term).subscribe({
      next: (response: any) => {
        this.meals = response.meals ?? [];
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.meals = [];
        this.cdr.detectChanges();
      }
    });
  }

  onSearchClick(): void {
    this.hasSearched = true;
    const term = this.searchTerm.trim() || 'a';
    this.fetchMeals(term);
  }
}
