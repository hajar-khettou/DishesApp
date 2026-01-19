import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {

  @Output() countryChange = new EventEmitter<string>();

  onCountrySelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.countryChange.emit(value);
  }
}
