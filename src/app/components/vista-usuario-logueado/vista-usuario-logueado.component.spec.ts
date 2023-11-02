import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUsuarioLogueadoComponent } from './vista-usuario-logueado.component';

describe('VistaUsuarioLogueadoComponent', () => {
  let component: VistaUsuarioLogueadoComponent;
  let fixture: ComponentFixture<VistaUsuarioLogueadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaUsuarioLogueadoComponent]
    });
    fixture = TestBed.createComponent(VistaUsuarioLogueadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
