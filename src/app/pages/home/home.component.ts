import { Component, signal } from '@angular/core';
import { PhotoGridComponent } from '../../components/photo-grid/photo-grid.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../models/meal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoGridComponent, SearchBarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  visibleLetters = this.letters.slice(0, 7);
  hiddenLetters = this.letters.slice(7);     
  showAllLetters = false;  
  currentLetterIndex = 0;

  meals = signal<Meal[]>([]);
  filteredMeals = signal<Meal[]>([]);

  ngOnInit() {
  this.loadMealsByLetter(this.letters[this.currentLetterIndex]);
  }

  constructor(private mealsService: MealsService) {
    this.searchMeals('a');
  }
  
  toggleLetters() {
    this.showAllLetters = true;
  } 

  loadMealsByLetter(letter: string) {
  this.mealsService.getMealsByFirstLetter(letter)
    .subscribe(res => {
      const meals = res.meals ?? [];
      this.meals.set(meals);
      this.filteredMeals.set(meals);
    });
  }

  goToLetter(index: number) {
  this.currentLetterIndex = index;
  const letter = this.letters[index];
  this.loadMealsByLetter(letter);
  }

  searchMeals(term: string) {
    this.mealsService.searchMeals(term || 'a').subscribe(res => {
      const meals = res.meals ?? [];
      this.meals.set(meals);
      this.filteredMeals.set(meals);
    });
  }

  filterByCountry(country: string) {
    if (!country) {
      this.filteredMeals.set(this.meals());
      return;
    }

    this.mealsService.filterByArea(country).subscribe(res => {
      this.filteredMeals.set(res.meals ?? []);
    });
  }
  
}
