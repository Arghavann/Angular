import { Component } from '@angular/core';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrls: ['./s3.component.scss']
})

export class S3Component {

  showNewData=false;
  showCard: boolean =false;
  name: string = '';
  family: string ='';
  age : number = 0 ;
  marriedStatus: string ='0' ;
  is18 : boolean = false;
  currentYear : number = 2024;
  newYear: number = 0;


  showData(event: any) {
    this.showNewData = true;
    this.showCard = true;
  this.newYear = this.currentYear - this.age;
  if (this.newYear >18){
    this.is18 = false
  }
  else {
    this.is18 = true
  }
    console.log(this.newYear)
  }
}


