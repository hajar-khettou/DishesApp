import { Meal } from './meal.model';

export interface MealsResponse {
  meals: Meal[] | null;
}
