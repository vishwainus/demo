import { TestBed } from '@angular/core/testing';

import { DemoSerService } from './demo-ser.service';

describe('DemoSerService', () => {
  let service: DemoSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
