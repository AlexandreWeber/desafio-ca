import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoaderService } from '../shared/services/loader.service';

@Injectable()

export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      url: `${req.url}&appId=${environment.appId}`
    });

    this.loaderService.show();

    return next.handle(reqClone).pipe(finalize(() => {
      this.loaderService.hide();
    }));
  }
}
