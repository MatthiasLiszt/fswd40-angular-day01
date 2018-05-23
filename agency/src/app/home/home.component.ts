import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private homeHeading: string;
	private homeCol1H: string;
	private homeCol2H: string;
	private homeCol3H: string;
	private homeCol4H: string;

  constructor() {
  	this.homeHeading = "Why we are the best";
  	this.homeCol1H = "Accommodation";
  	this.homeCol2H = "Transportation";
  	this.homeCol3H = "Seasoned Agents";
  	this.homeCol4H = "Easy Trip Planning";
  }

  ngOnInit() {
  }

}
