import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NetworkLayerService } from '../NetworkService/network-layer.service';

@Injectable({
  providedIn: 'root'
})
export class RepsositoryService {
  constructor(private http: HttpClient, private networkLayer: NetworkLayerService) { }

  baseURL: string = "https://teamway.holodeck.xyz/api/"

  public get(endpoint: string, params?: any): Observable<any> {
    let reqParams: HttpParams = new HttpParams();
    if (params) {
      reqParams = new HttpParams();
      Object.keys(params).forEach(key => {
        reqParams.append(key, params[key]);
      });
    }
    return this.networkLayer.handleRequest('Get', this.baseURL + endpoint, null, reqParams);
  }

  public post(endpoint: string, body: any, reqHeaders?: HttpHeaders, responseType?: any): Observable<any> {
    return this.networkLayer.handleRequest('Post', this.baseURL + endpoint, body);
  }

  public upload(url: string, endpoint: string, formData: any, reportProgress = false): Observable<any> {
    const httpObserve: any = reportProgress ? 'events' : 'response';
    const httpOptions = {
      reportProgress,
      observe: httpObserve
    };

    return this.http.post(url + endpoint, formData, httpOptions);
  }

  public put(endpoint: string, body: any): Observable<any> {
    let fullUrl = this.baseURL + endpoint;
    return this.networkLayer.handleRequest('PATCH', fullUrl, body);
  }

  public delete(url: string, endpoint: string, body: any): Observable<any> {
    let fullUrl = url + endpoint;
    return this.networkLayer.handleRequest('Delete', fullUrl, body);

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
