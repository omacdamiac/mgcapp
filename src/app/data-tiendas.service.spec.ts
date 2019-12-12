/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataTiendasService } from './data-tiendas.service';

describe('DataTiendasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTiendasService]
    });
  });

  it('should ...', inject([DataTiendasService], (service: DataTiendasService) => {
    expect(service).toBeTruthy();
  }));
});
