import { TestBed } from '@angular/core/testing';

import { GetDiasService } from './get-dias.service';

describe('GetDiasService', () => {
  let service: GetDiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
