import { TestBed } from '@angular/core/testing';

import { FavourtieMovieService } from './favourtie-movie.service';

describe('FavourtieMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavourtieMovieService = TestBed.get(FavourtieMovieService);
    expect(service).toBeTruthy();
  });
});
