import { TestBed, inject } from '@angular/core/testing';

import { PythonWsService } from './python-ws.service';

describe('PythonWsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PythonWsService]
    });
  });

  it('should be created', inject([PythonWsService], (service: PythonWsService) => {
    expect(service).toBeTruthy();
  }));
});
