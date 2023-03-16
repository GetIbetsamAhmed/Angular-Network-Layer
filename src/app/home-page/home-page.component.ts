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
    this.homepageApiService.getData().subscribe(response => {
      this.data = response;
      debugger;
    });
  }

}
