import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	private projectName:string;
  constructor() {
  	  	this.projectName = "CodeFactory";
   }

  ngOnInit() {
  }

}
