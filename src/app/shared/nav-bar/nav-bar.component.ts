import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
              ) { }

  ngOnInit(): void {
  }
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  logout(){
    this.router.navigate(['/login']);
  }

}
