import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { DataService } from '../data.service';;
import { from } from 'rxjs';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]

})
export class HousesComponent implements OnInit {

  users: Object;
  
 

  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.getUsers().subscribe(
      data => this.users = data 
    );
    
   
  }

}
