import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent {
  @Input() meals: Meal[] = [];
}

