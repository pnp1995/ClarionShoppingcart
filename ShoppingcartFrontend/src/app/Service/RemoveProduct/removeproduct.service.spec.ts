import { TestBed } from '@angular/core/testing';

import { RemoveproductService } from './removeproduct.service';

describe('RemoveproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveproductService = TestBed.get(RemoveproductService);
    expect(service).toBeTruthy();
  });
});
