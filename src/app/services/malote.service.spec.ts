import { TestBed } from '@angular/core/testing';

import { MaloteService } from './malote.service.js';

describe('MaloteSerivceTs', () => {
  let service: MaloteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaloteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
