import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PhotoDetail } from './components/photo-detail/photo-detail.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'meal/:id', component: PhotoDetail },
  { path: '**', redirectTo: '' }
];
