import { TestBed } from '@angular/core/testing';

import { CatalogeService } from './cataloge.service';

describe('CatalogeService', () => {
  let service: CatalogeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
