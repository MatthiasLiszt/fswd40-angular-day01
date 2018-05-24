import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public homeHeading: string;
	public homeCol1H: string;
	public homeCol2H: string;
	public homeCol3H: string;
	public homeCol4H: string;

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
