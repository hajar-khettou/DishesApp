import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SearchBarComponent,
        RouterTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when onSearchClick is called', () => {
    spyOn(component.search, 'emit');
    component.searchTerm = '  pizza  ';
    component.onSearchClick();
    expect(component.search.emit).toHaveBeenCalledWith('pizza');
  });

  it('should emit countryChange event when onCountryChange is called', () => {
    spyOn(component.countryChange, 'emit');
    component.onCountryChange('French');
    expect(component.countryChange.emit).toHaveBeenCalledWith('French');
  });
});
