/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromoService } from './promo.service';

describe('PromoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromoService]
    });
  });

  it('should ...', inject([PromoService], (service: PromoService) => {
    expect(service).toBeTruthy();
  }));
});
