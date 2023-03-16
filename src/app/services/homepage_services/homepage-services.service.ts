import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepsositoryService } from '../RepsositoryService/repository-service';

@Injectable({
  providedIn: 'root'
})
export class HomepageServices {

  constructor(private objRepository: RepsositoryService) { }

  getData(): Observable<any> {
    return this.objRepository.get('profile_links.json');
  }
}
