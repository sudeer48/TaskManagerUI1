import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Student } from '../Models/Student';
import { LoginModel } from '../Models/LoginModel';
import { RoleInformation } from '../Models/RoleInformation';
//const baseUrl = 'https://localhost:44368/api';
const baseUrl = 'https://localhost:44368/Employee/api';  //

const getData = '/GetEmployeeDetails';
const postData = '/CreateEmployee';
const deleteData = '/DeleteRecord';
const loginUser = '/Authentication';
const getRole = '/GetRoleDetails';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private http: HttpClient) { }
  private isLeaveApply = new Subject<number>();
  //SharingData = new Subject();//subject

  textAddedVent = new Subject<boolean>();

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(baseUrl + getData);

  }

  login(login: LoginModel): Observable<any> {
    return this.http.post<LoginModel>(baseUrl + loginUser, login);
  }
  // changeDataSubject(data: any) {
  //   this.SharingData.next(data.value);
  // }
  sendUpdate(isLeaveApply: number) { //the component that wants to update something, calls this fn
    this.isLeaveApply.next(isLeaveApply); //next() will feed the value in Subject
  }
  getUpdate(): Observable<number> { //the receiver component calls this function 
    return this.isLeaveApply.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
  insertData(students: Student): Observable<any> {
    debugger;
    return this.http.post<Student>(baseUrl + postData, students)
  }

  deleteData(studentid: Student): Observable<any> {
    debugger;
    return this.http.post(baseUrl + deleteData, studentid)
  }

  getRoleDetails():Observable<any>{
    return this.http.get<RoleInformation[]>(baseUrl + getRole);
  }
  getText()
  {
    debugger;
    this.textAddedVent.next(true);
  }
}