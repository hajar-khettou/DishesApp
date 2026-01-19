import { Component, signal } from '@angular/core';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MealsService } from './services/meals.service';
import { Meal } from './models/meal.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PhotoGridComponent,
    FiltersComponent,
    SearchBarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  meals = signal<Meal[]>([]);
  filteredMeals = signal<Meal[]>([]);

  constructor(private mealsService: MealsService) {
    this.searchMeals('a');
  }

  searchMeals(term: string) {
    const query = term || 'a';

    this.mealsService.searchMeals(query).subscribe(res => {
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

    this.filteredMeals.set(
      this.meals().filter(m => m.strArea === country)
    );
  }
}
