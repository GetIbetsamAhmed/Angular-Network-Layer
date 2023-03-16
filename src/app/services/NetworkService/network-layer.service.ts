import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkLayerService {

  constructor(private http: HttpClient) { }

  public handleRequest(method: string, url: string, reqBody?: any,
    reqParams?: HttpParams, reqHeaders?: HttpHeaders, responseType?: any): Observable<any> {
    const httpObserve: any = 'response';
    const httpResponseType = responseType ? responseType : 'json';
    if (!reqHeaders) {
      reqHeaders = new HttpHeaders();
      reqHeaders = reqHeaders.set('Content-Type', 'application/json');
      reqHeaders = reqHeaders.set('Access-Control-Allow-Origin', '*');
    }

    const httpOptions = {
      body: reqBody,
      headers: reqHeaders,
      params: reqParams,
      responseType: httpResponseType,
      observe: httpObserve
    };

    return this.getHttpRequest(method, url, httpOptions);
  }

  public getHttpRequest(method: string, url: string, httpOptions: any): Observable<any> {
    return new Observable((observer) => {
      this.http.request(method, url, httpOptions)
        .subscribe(
          (response: any) => {
            debugger;
            const resBody = (response !== null && response['body'] !== null) ? response['body'] : {};
            observer.next(resBody);
            observer.complete();
          },
          (error) => {
            debugger;
            console.log('[error]', error);
            observer.error(error);
          });
    });
  }

}
