import { Component, signal } from '@angular/core';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';

@Component({
  selector: 'app-root',
  imports: [PhotoGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('flickr-photos');
}
