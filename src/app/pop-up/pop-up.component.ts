import { Component,Inject, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  // constructor(@Inject(MAT_DIALOG_DATA) public data) {
  //   this.firstName = data.name
  // }

  constructor( ) {
   
  }

  ngOnInit(): void {
  }
}
