import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Student } from '../Models/Student';
import { LoginModel } from '../Models/LoginModel';
import { RoleInformation } from '../Models/RoleInformation';
import { environment } from 'src/environments/environment.local';
//const baseUrl = 'https://localhost:44368/Employee/api';  //

const getData = '/Employee/api/GetEmployeeDetails';
const postData = '/Employee/api/CreateEmployee';
const deleteData = '/Employee/api/DeleteRecord';
const loginUser = '/Employee/api/Authentication';
const getRole = '/Employee/api/GetRoleDetails';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  public baseHttpUrl: any;
  constructor(private http: HttpClient) { 
    this.baseHttpUrl=environment.ApplicationUrl;
  }
  private isLeaveApply = new Subject<number>();
  //SharingData = new Subject();//subject

  textAddedVent = new Subject<boolean>();

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseHttpUrl + getData);
  }

  login(login: LoginModel): Observable<any> {
    return this.http.post<LoginModel>(this.baseHttpUrl + loginUser, login);
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
    return this.http.post<Student>(this.baseHttpUrl + postData, students)
  }

  deleteData(empId: number): Observable<any> {
    debugger;
    var params = { empId: empId };
    return this.http.delete(this.baseHttpUrl + deleteData, {params})
  }

  getRoleDetails():Observable<any>{
    return this.http.get<RoleInformation[]>(this.baseHttpUrl + getRole);
  }
  getText()
  {
    debugger;
    this.textAddedVent.next(true);
  }
}