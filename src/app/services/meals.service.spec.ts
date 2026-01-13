import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MealsService } from './meals.service';

describe('MealsService', () => {
  let service: MealsService;
  let httpMock: HttpTestingController;

  const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(MealsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call API with the correct search term', () => {
    const mockResponse = {
      meals: [
        {
          idMeal: '1',
          strMeal: 'Pizza',
          strMealThumb: 'https://www.example.com/pizza.jpg',
          strArea: 'Italian'
        }
      ]
    };

    service.searchMeals('pizza').subscribe(response => {
      expect(response).toEqual(mockResponse);
      expect(response.meals.length).toBe(1);
      expect(response.meals[0].strMeal).toBe('Pizza');
    });

    const req = httpMock.expectOne(`${API_URL}pizza`);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });

  it('should handle empty results', () => {
    const mockResponse = {
      meals: null
    };

    service.searchMeals('unknown').subscribe(response => {
      expect(response.meals).toBeNull();
    });

    const req = httpMock.expectOne(`${API_URL}unknown`);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
