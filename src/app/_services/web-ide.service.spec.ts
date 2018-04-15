import { TestBed, inject } from '@angular/core/testing';

import { WebIdeService } from './web-ide.service';

describe('WebIdeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebIdeService]
    });
  });

  it('should be created', inject([WebIdeService], (service: WebIdeService) => {
    expect(service).toBeTruthy();
  }));
});
