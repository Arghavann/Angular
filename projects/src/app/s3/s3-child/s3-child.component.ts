import { Component } from '@angular/core';

@Component({
  selector: 'app-s3-child',
  templateUrl: './s3-child.component.html',
  styleUrls: ['./s3-child.component.scss']
})
export class S3ChildComponent {
  name: string = '';
  family: string ='';
  age : number = 0 ;
  marriedStatus: string ='0' ;
  displayData: boolean = false;


  showName(event: any){
    this.name=event.target.value
  }
  showFamily(event: any){
    this.family=event.target.value

  }
  showAge(event: any){
    this.age=event.target.value

  }
  isMarried(event:any){
    this.marriedStatus=event.target.value
  }

  notMarried(event:any){
    this.marriedStatus= event.target.value
  }
  showInfo(event: any){
    this.displayData= true;
  }

}
