import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

   private API = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  searchMeals(term: string) {
    return this.http.get<any>(`${this.API}/search.php?s=${term}`);
  }

  getMealsByFirstLetter(letter: string) {
  return this.http.get<any>(
    `${this.API}/search.php?f=${letter}`
  );
  }

  getAreas() {
  return this.http.get<any>(
    'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
  );
}

  filterByArea(area: string) {
  return this.http.get<any>(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
}

  getMealById(id: string) {
  return this.http.get<any>(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
}
}

