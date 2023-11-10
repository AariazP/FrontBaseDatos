import { TestBed } from '@angular/core/testing';

import { CompartirInformacionService } from './compartir-informacion.service';

describe('CompartirInformacionService', () => {
  let service: CompartirInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
