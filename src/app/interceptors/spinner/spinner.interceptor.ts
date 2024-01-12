import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '@services/spinner/spinner.service';
import { finalize } from 'rxjs';

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  const spinnerService = inject(SpinnerService);

  // show the spinner from the beginning
  spinnerService.show();

  return next(req).pipe(finalize(() => spinnerService.hide()));
};
