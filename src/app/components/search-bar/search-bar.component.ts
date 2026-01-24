import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltersComponent } from '../filters/filters.component';
import { RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, FiltersComponent, RouterLink, RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchTerm = '';

  @Output() search = new EventEmitter<string>();
  @Output() countryChange = new EventEmitter<string>();

  onSearchClick() {
    this.search.emit(this.searchTerm.trim());
  }

  onCountryChange(country: string) {
    this.countryChange.emit(country);
  }
}

