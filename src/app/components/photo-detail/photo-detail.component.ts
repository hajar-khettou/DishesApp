import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealsService } from '../../services/meals.service';
import { CommonModule } from '@angular/common';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetail {
  meal = signal<Meal | null>(null);

  constructor(
    private route: ActivatedRoute,
    private mealsService: MealsService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMeal(id);
    }
  }

  loadMeal(id: string) {
    this.mealsService.getMealById(id).subscribe(res => {
      this.meal.set(res.meals?.[0] ?? null);
    });
  }

  getIngredients(meal: any) {
  const ingredients: { name: string; measure: string }[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        name: ingredient,
        measure: measure || ''
      });
    }
  }

  return ingredients;
}

}
