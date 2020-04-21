import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest, HttpHandler,HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  {
return next.handle(request)
.pipe(
  tap(
    (event:HttpEvent<any>)=>{},
    (error:any)=>{
      if(error instanceof HttpErrorResponse)
      {
        console.log(error)
      }
    }
  )
)
  }
}
