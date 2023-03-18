import { Component, OnInit } from '@angular/core';
import { HomepageServices } from '../services/homepage_services/homepage-services.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data: any;

  constructor(private homepageApiService: HomepageServices) { }

  ngOnInit(): void {
    // this.homepageApiService.getData().subscribe(response => {
    //   this.data = response;
    //   debugger;
    // });
  }

  clickGetMethod() {
    this.homepageApiService.getAllTeams().subscribe(
      value => {
        debugger;
      },
      error => {
        alert("Error in get API");
      }
    );
  }

  clickPostMethod() {
    const obj = { team_name: "Haris skin21", project_id: [388], work_week: null, attendance_mechanism: 3 };
    this.homepageApiService.createTeam(obj).subscribe(
      value => {
        debugger;
      },
      error => {
        alert("Error in post API");
      }
    );
  }

  clickPatchMethod() {
    const obj = { delete_member: true, team_id: "769", user_ids: [57, 57] };
    this.homepageApiService.updataeTeam(obj).subscribe(
      value => {
        debugger;
      },
      error => {
        alert("Error in post API");
      }
    );
  }

}
