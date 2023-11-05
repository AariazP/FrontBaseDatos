import { TestBed } from '@angular/core/testing';

import { PeticionesHTTPService } from './peticiones-http.service';

describe('PeticionesHTTPService', () => {
  let service: PeticionesHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
