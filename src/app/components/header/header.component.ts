import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private router: Router, private homeService: HomeService) { }

  clearForm() {

    this.homeService.clearForm();
    this.router.navigate(['/']);

  }

}
