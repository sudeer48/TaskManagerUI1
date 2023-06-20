import { Component, OnInit } from '@angular/core';
import { UserMessage } from 'src/app/Models/UserMessage';
import { EmployeeService } from 'src/app/Services/EmployeeService';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {
  userMessageDetails: UserMessage[];

  constructor(public employeeservice: EmployeeService,) { }

  ngOnInit(): void {
    this.getUserMessageDetails();
  }


  getUserMessageDetails(): void {
    this.employeeservice.getUserMessageDetails()
      .subscribe({
        next: (data) => {
          this.userMessageDetails = data;
        },
        error: (e) => console.error(e)
      });
  }
}
