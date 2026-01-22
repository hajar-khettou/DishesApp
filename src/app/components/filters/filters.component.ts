import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.component.html',
  imports: [CommonModule],
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {

  @Output() countryChange = new EventEmitter<string>();
  areas: string[] = [];

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.mealsService.getAreas().subscribe(res => {
      this.areas = res.meals.map((a: any) => a.strArea);
    });
  }

  onCountrySelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.countryChange.emit(value);
  }
}