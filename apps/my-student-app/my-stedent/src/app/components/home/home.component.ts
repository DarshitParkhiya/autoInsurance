import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../../models/requestModel';
import { RequestTypeService } from '../../services/request-type.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  request: RequestModel = new RequestModel();
  listData: object = new Object();
  todaDate: Date = new Date('dd/MM/yyyy');
  userName = '';
  userEmailId = '';

  value: any;
  options = [
    {
      id: 'request1',
      value: '',
    },
    {
      id: 'request2',
      value: '',
    },
    {
      id: 'request3',
      value: '',
    },
    {
      id: 'request4',
      value: '',
    },
  ];

  list1 = [
    // { text: 'item 1', selected: false },
    // { text: 'item 2', selected: false },
    // { text: 'item 3', selected: false },
    // { text: 'item 4', selected: false },
    // { text: 'item 5', selected: false },
  ];
  list2 = [];

  constructor(
    private requestTypeService: RequestTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.request.requestrName = localStorage.getItem('userName');
    this.request.requestrEmail = localStorage.getItem('userEmailId');
  }

  public toggleSelection(item, list): void {
    item.selected = !item.selected;
  }

  public moveSelected(direction): void {
    if (direction === 'left') {
      this.list2.forEach((item) => {
        if (item.selected) {
          this.list1.push(item);
        }
      });
      this.list2 = this.list2.filter((i) => !i.selected);
    } else {
      this.list1.forEach((item) => {
        if (item.selected) {
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter((i) => !i.selected);
    }
  }

  public moveAll(direction): void {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
    } else {
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
    }
  }

  onSumbit(): void {
    this.request.listItem = this.list2.map(function (value) {
      return value.text;
    });
    this.request.isActive = true;
    this.requestTypeService.createRequest(this.request).subscribe((res) => {
      console.log(res);
    });
    this.gotoDasboard();
  }

  gotoDasboard(): void {
    this.router.navigate(['/dashboard'], {
      relativeTo: this.route,
    });
  }

  onCancel(): void {
    this.gotoDasboard();
  }

  radioChange(val: string): void {
    this.request.reqestType = val;
    this.list1 = [];
    this.list2 = [];
    if (this.listData[val]) {
      this.list1 = this.listData[val];
    } else {
      this.requestTypeService.getRequestByType(val).subscribe((res) => {
        const list: any = [];
        res.listItem.forEach((ele) => {
          list.push({ text: ele, selected: false });
        });
        this.listData[res.type] = list;
        this.list1 = this.listData[res.type];
      });
    }
  }
}
