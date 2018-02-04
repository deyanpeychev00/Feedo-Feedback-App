import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from "../../services/toastr-service/toastr.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  logged = localStorage.getItem('authtoken') !== null;
  admin = localStorage.getItem('role') !== 'init';
  username = localStorage.getItem('username');

  constructor(private router: Router, private toastr: ToastrService) {
    router.events.subscribe((val) => {
      this.logged = localStorage.getItem('authtoken') !== null;
      this.admin = localStorage.getItem('role') !== 'init';
      this.username = localStorage.getItem('username');
    });
  }

  ngOnInit() {
  }

}
