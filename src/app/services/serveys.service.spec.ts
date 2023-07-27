import { TestBed } from '@angular/core/testing';

import { ServeysService } from './serveys.service';

describe('ServeysService', () => {
  let service: ServeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
