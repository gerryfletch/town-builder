import { TestBed, inject } from '@angular/core/testing';

import { PropsService } from './props.service';

describe('PropsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropsService]
    });
  });

  it('should be created', inject([PropsService], (service: PropsService) => {
    expect(service).toBeTruthy();
  }));
});
