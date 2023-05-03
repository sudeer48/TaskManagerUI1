import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.local";
import { MenuDetails } from "../Models/MenuDetails";

const getMenuData = '/api/Administration/api/GetMenuItemDetails';
@Injectable({
    providedIn: 'root'
})
export class AdministrationService {
    public baseHttpUrl: any;
    constructor(private http: HttpClient) {
        this.baseHttpUrl = environment.ApplicationUrl;
    }

    getMenuItem(): Observable<any> {
        debugger;
        return this.http.get<MenuDetails[]>(this.baseHttpUrl + getMenuData);
    }

    // getRoleDetails():Observable<any>{
    //     return this.http.get<RoleInformation[]>(this.baseHttpUrl + getRole);
    //   }
}