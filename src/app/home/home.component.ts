import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthguardServiceService } from '../Services/authguard-service.service';
import { EmployeeService } from '../Services/EmployeeService';
import { AdministrationService } from '../Services/AdministrationService';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  isActive: boolean = false;
  menuDetails: any;
  // menu = [{
  //   "text": "Main",
  //   "routerLink": "main"
  // },
  // {
  //   "text": "Details",
  //   "routerLink": "studentdetails"
  // },
  // {
  //   "text": "Student Registration",
  //   "routerLink": "studentregistration"
  // }];

  constructor(private authguardServiceService: AuthguardServiceService,
    private router: Router, private employeeservice: EmployeeService,
    private administrativeService: AdministrationService) { }

  ngOnInit(): void {
    this.retrieveMenuItems();
    this.employeeservice.textAddedVent.subscribe(
      data => {
        this.isActive = data;
      }
    )
  }

  logout() {
    debugger;
    this.authguardServiceService.logout();
    this.router.navigate(['']);
  }

  retrieveMenuItems(): void {
    debugger;
    this.administrativeService.getMenuItem()
      .subscribe((data: any) => {
        debugger;
        this.menuDetails = data;
      });
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
