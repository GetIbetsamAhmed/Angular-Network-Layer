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

  getAllTeams(): Observable<any> {
    return this.objRepository.get('team?get_manage_team_list=true');
  }

  // Any will be reaplce with model this is only for testing API purpose
  createTeam(objTeam: any): Observable<any> {
    return this.objRepository.post('team', objTeam)
  }

  // Any will be reaplce with model this is only for testing API purpose
  updataeTeam(objTeam: any): Observable<any> {
    return this.objRepository.put('members', objTeam)
  }


}
