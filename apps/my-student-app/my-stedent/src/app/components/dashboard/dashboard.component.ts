import { Component, OnInit } from '@angular/core';
import { RequestTypeService } from '../../services/request-type.service';
import { RequestModel } from '../../models/requestModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  request: RequestModel[] = [];
  constructor(private requestTypeService: RequestTypeService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.requestTypeService.getAllRequest().subscribe((res) => {
      this.request = res;
    });
  }
}
