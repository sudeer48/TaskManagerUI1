import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthguardServiceService } from '../Services/authguard-service.service';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  constructor(private authguardServiceService: AuthguardServiceService, private router: Router) { }

  ngOnInit(): void {
    debugger;
  }

  logout() {
    debugger;
    this.authguardServiceService.logout();
    this.router.navigate(['']);
  }

  // open(content: any) {
  //   this.modalService.open(content,
  //  {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = 
  //        `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
}
