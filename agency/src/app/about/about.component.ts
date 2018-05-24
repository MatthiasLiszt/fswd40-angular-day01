import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public myWindow: string;
  public showIt: boolean;  

  constructor() { 
    this.myWindow="block";
    this.showIt=true;
  }

  ngOnInit() {
  }

  removePopUp(){
   this.myWindow="none";
   this.showIt=false;
   //alert('popup clicked');
  }
}
