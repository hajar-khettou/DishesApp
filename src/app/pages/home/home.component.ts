import { Component, signal } from '@angular/core';
import { PhotoGridComponent } from '../../components/photo-grid/photo-grid.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MealsService } from '../../services/meals.service';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoGridComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  meals = signal<Meal[]>([]);
  filteredMeals = signal<Meal[]>([]);

  constructor(private mealsService: MealsService) {
    this.searchMeals('a');
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
