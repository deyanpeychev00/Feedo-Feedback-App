import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-single-user-list',
  templateUrl: './single-user-list.component.html',
  styleUrls: ['./single-user-list.component.css']
})
export class SingleUserListComponent implements OnInit {
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
