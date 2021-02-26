import { TestBed } from '@angular/core/testing';

import { CamionnetteService } from './camionnette.service';

describe('CamionnetteService', () => {
  let service: CamionnetteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamionnetteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
