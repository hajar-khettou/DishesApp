import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from '../../models/meal.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent {

@Input() meals: Meal[] = [];
  constructor(private router: Router) {}

  goToMeal(id: string) {
    this.router.navigate(['/meal', id]);
  }
}

