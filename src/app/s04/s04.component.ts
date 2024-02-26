import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-s04',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './s04.component.html',
  styleUrl: './s04.component.scss'
})
export class S04Component {
  isVisible : boolean = false;
  myList : string[]= ['This is timeStamp:'];
  timeStamp ='';
  visibility(){
    this.isVisible = !this.isVisible;
    const newTimeStamp = new Date().toString();
    this.timeStamp = newTimeStamp;
    this.myList.push(newTimeStamp);
    console.log(this.myList);
  }
}
