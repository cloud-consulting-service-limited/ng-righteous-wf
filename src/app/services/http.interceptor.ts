import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HttpResponse,
    HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Observable, of} from 'rxjs';


@Injectable()
export class MockHttpCalIInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        console.log('Intercepted request' + request.url);
        if (request.url === "http://localhost:8080/upload") {
            console.log('Loaded from JSON: ' + request.url);
            const delay = 300; // TODO: inject delay?
            return createUploadEvents(delay);
        }
        return next.handle(request);
    }
}
/** Create simulation of upload event stream */
function createUploadEvents(delay: number) {
    // Simulate XHR behavior which would provide this information in a ProgressEvent
    const chunks = 5;
    const total = 12345678;
    const chunkSize = Math.ceil(total / chunks);
  
    return new Observable<HttpEvent<any>>(observer => {
      // notify the event stream that the request was sent.
      observer.next({type: HttpEventType.Sent});
  
      uploadLoop(0);
  
      function uploadLoop(loaded: number) {
        // N.B.: Cannot use setInterval or rxjs delay (which uses setInterval)
        // because e2e test won't complete. A zone thing?
        // Use setTimeout and tail recursion instead.
          setTimeout(() => {
            loaded += chunkSize;
  
            if (loaded >= total) {
                console.log("!!!!!!!!!!!!!!Completed");
              const doneResponse = new HttpResponse({
                status: 201, // OK but no body;
              });
              observer.next(doneResponse);
              observer.complete();
              return;
            }
  
            const progressEvent: HttpProgressEvent = {
              type: HttpEventType.UploadProgress,
              loaded,
              total
            };
            observer.next(progressEvent);
            uploadLoop(loaded);
          }, delay);
      }
    });
  }
