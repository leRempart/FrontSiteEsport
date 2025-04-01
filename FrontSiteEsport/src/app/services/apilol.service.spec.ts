import { TestBed } from '@angular/core/testing';

import { APILolService } from './apilol.service';

describe('APILolService', () => {
  let service: APILolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APILolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
