import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NetworkLayerService } from '../NetworkService/network-layer.service';

@Injectable({
  providedIn: 'root'
})
export class RepsositoryService {
  constructor(private http: HttpClient, private networkLayer: NetworkLayerService) { }

  baseURL: string = "https://polkadot.betalogics.com/app/mobile/polkadot/"


  public get(endpoint: string, responseType?: any, params?: any): Observable<any> {
    let reqParams: HttpParams = new HttpParams();
    if (params) {
      reqParams = new HttpParams();
      Object.keys(params).forEach(key => {
        reqParams.append(key, params[key]);
      });
    }
    return this.networkLayer.handleRequest('Get', this.baseURL + endpoint, null, reqParams, undefined, responseType);
  }

  public post(url: string, endpoint: string, body: any, reqHeaders?: HttpHeaders, responseType?: any): Observable<any> {
    return this.networkLayer.handleRequest('Post', url + endpoint, body, undefined, reqHeaders, responseType);
  }

  public upload(url: string, endpoint: string, formData: any, reportProgress = false): Observable<any> {
    const httpObserve: any = reportProgress ? 'events' : 'response';
    const httpOptions = {
      reportProgress,
      observe: httpObserve
    };

    return this.http.post(url + endpoint, formData, httpOptions);
  }

  public put(url: string, endpoint: string, body: any): Observable<any> {
    let fullUrl = url + endpoint;
    let setHeaders = new HttpHeaders();
    setHeaders = setHeaders.set('Content-Type', 'application/json');
    setHeaders = setHeaders.set('Access-Control-Allow-Origin', '*');
    return this.networkLayer.handleRequest('Put', fullUrl, body, undefined, setHeaders, undefined);

    // const httpObserve = 'response';
    // const httpResponseType = 'json';

    // const httpOptions = {
    //   body,
    //   headers: setHeaders,
    //   responseType: httpResponseType,
    //   observe: httpObserve
    // };
    // return this.getHttpRequest('Put', fullUrl, httpOptions);
  }

  public delete(url: string, endpoint: string, body: any): Observable<any> {
    let fullUrl = url + endpoint;
    let setHeaders = new HttpHeaders();
    setHeaders = setHeaders.set('Content-Type', 'application/json');
    setHeaders = setHeaders.set('Access-Control-Allow-Origin', '*');
    return this.networkLayer.handleRequest('Delete', fullUrl, body, undefined, setHeaders, undefined);

    // let reqHeaders = new HttpHeaders();
    // reqHeaders = reqHeaders.set('Content-Type', 'application/json');
    // reqHeaders = reqHeaders.set('Access-Control-Allow-Origin', '*');

    // const httpOptions = {
    //   headers: reqHeaders,
    //   body,
    // };
    // return this.getHttpRequest('Delete', url + endpoint, httpOptions);
  }


}
