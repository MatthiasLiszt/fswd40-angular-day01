import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	private heroHeading: string;
	private heroText: string;
	private heroBtnText: string;
	private heroBtnUrl: string;

  constructor() {
  	this.heroHeading = "We are your ultimate Winter experience Provider";
  	this.heroText = "With hundreds of winter holiday destinations offered, we are your nnatural choise for planning it all out";
	this.heroBtnText= "Learn more";
	this.heroBtnUrl = "#";  
  }

  ngOnInit() {
  }

}
