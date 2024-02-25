import { TestBed } from '@angular/core/testing';
import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';

import { spinnerInterceptor } from './spinner.interceptor';
import { SpinnerService } from '@services/spinner/spinner.service';
import { of } from 'rxjs';

describe('spinnerInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => spinnerInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should show the spinner from the beginning', () => {
    const showSpy = spyOn(TestBed.inject(SpinnerService), 'show');
    const testFn: HttpHandlerFn = (req) => of(new HttpResponse({} as any));

    interceptor({} as any, testFn).subscribe();

    expect(showSpy).toHaveBeenCalled();
  });
});
