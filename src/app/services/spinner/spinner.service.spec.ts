import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isLoading$ should be defined', () => {
    expect(service.isLoading$).toBeDefined();
  });

  it('show should set isLoading to true', () => {
    service.show();
    service.isLoading$.subscribe((isLoading) => {
      expect(isLoading).toBeTrue();
    });
  });
});
