import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PhotoDetail } from './photo-detail.component';

describe('PhotoDetail', () => {
  let component: PhotoDetail;
  let fixture: ComponentFixture<PhotoDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoDetail],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '52772'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
