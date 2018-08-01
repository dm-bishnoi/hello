import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styles: []
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  multi="colorChange bgColor";

  cssChange=true;

  inlineColor=true;

  multiColor = {
    'colorChange':true,
    'bgColor':true,
    'singleCss':true
  }

  names:string="Bishnoi";

  favColor="red";

  colors=['red','green','blue'];

  biodata=[
    {id:1, name:"Dharmeder"}, 
    {id:2, name:"Sonu"},
    {id:3, name:"monu"}
  ]

  email1="bishnoid@gmail.com";
  getEmail1(){
    console.log(this.email1);
  }

  log:string = "this is login page"
  isHidden:boolean = false;

  texts:string = "";
  myfun(event){
    console.log(event.target.value);
    
  }

  isActive=true;  


}
