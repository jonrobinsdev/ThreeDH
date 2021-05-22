import { TestBed } from '@angular/core/testing';

import { EditCoreDataService } from './edit-core-data.service';

describe('EditCoreDataService', () => {
  let service: EditCoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
