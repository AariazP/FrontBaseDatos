import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMateriaComponent } from './banner-materia.component';

describe('BannerMateriaComponent', () => {
  let component: BannerMateriaComponent;
  let fixture: ComponentFixture<BannerMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerMateriaComponent]
    });
    fixture = TestBed.createComponent(BannerMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
