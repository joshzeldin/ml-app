import { TestBed, inject } from '@angular/core/testing';

import { KdbWsService } from './kdb-ws.service';

describe('KdbWsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KdbWsService]
    });
  });

  it('should be created', inject([KdbWsService], (service: KdbWsService) => {
    expect(service).toBeTruthy();
  }));
});
