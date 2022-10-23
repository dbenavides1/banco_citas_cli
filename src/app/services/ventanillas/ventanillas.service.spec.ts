import { TestBed } from '@angular/core/testing';

import { VentanillasService } from './ventanillas.service';

describe('VentanillasService', () => {
  let service: VentanillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
