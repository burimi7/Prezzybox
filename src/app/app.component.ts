import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Prezzybox';
  UnitLengthValue='M';
  Distance=0;
  Chores=[
    {Name: "Tidying bedroom", Value: 2},
    {Name: "Cleaning dishes", Value: 1.84},
    {Name: "Vacuuming", Value: 2},
    {Name: "Helping with cooking", Value: 2.04},
    {Name: "Putting bins out", Value: 1.71},
    {Name: "Hanging washing out", Value: 1.89},
    {Name: "Dusting", Value: 1.84},
    {Name: "Cleaning car", Value: 3},
    {Name: "Cleaning bathroom", Value: 2.19},
    {Name: "Babysitting", Value: 6}
  ]
  Step=0;

  ChangeUnitLength(NewUnit){
    this.UnitLengthValue=NewUnit
  }

Calculate(Value){
  if(this.UnitLengthValue=='M'){
    return Math.trunc( (this.Distance * 5.98) / Value )
  }
  else{
    return Math.trunc( ((this.Distance /1.6)* 5.98) / Value )
  }
}

UpdateDistance(UpdateValue){
  this.Distance = this.Distance + UpdateValue
}
}
