import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { BulbResponse } from './../../model/BulbResponse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  bulbResults: BulbResponse;

  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  // set table columns array
  displayedColumns = ['Bulb', 'State'];

  ngOnInit() {

    this.bulbResults = this.homeService.sharedFormData;

  }

}
