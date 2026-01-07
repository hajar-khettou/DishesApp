import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlickrService } from '../../services/flickr.service';

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.css']
})
export class PhotoGridComponent {

  photos: any[] = [];
  searchTerm = '';
  hasSearched = false; // ✅ état de recherche

  constructor(private flickrService: FlickrService) {}

  search(): void {
    const term = this.searchTerm.trim();

    if (!term) {
      // champ vide → on vide tout
      this.photos = [];
      this.hasSearched = false;
      return;
    }

    this.hasSearched = true;

    this.flickrService.searchPhotosByTags(term)
      .subscribe(data => {
        this.photos = data.items;
      });
  }
}
