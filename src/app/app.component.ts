import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  name:string;date:string;
  amount:number;

  onNameChange(event:any){
    this.name=event.target.value;
  }

  onDateChange(event:any){
    this.date=event.target.value;
  }

  onAmountChange(event:any){
    this.amount=parseFloat(event.target.value);
  }
}

