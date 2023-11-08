import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReportesComponent } from './home-reportes.component';

describe('HomeReportesComponent', () => {
  let component: HomeReportesComponent;
  let fixture: ComponentFixture<HomeReportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeReportesComponent]
    });
    fixture = TestBed.createComponent(HomeReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
