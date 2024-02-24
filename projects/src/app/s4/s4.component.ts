import {booleanAttribute, Component} from '@angular/core';

@Component({
  selector: 'app-s4',
  templateUrl: './s4.component.html',
  styleUrls: ['./s4.component.scss']
})
export class S4Component {
  isVisible :boolean = false
  static id = 1;
  myList: string[] = ['This is timeStamp:'];
  timeStamp = '';
  isEven = true;
  visibility(){
    this.isVisible = !this.isVisible

      const newTimeStamp = new Date().toString();
      this.timeStamp = newTimeStamp;
      this.myList.push(newTimeStamp);
  console.log(this.myList)
}}
