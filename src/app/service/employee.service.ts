import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeModel} from './../model/employee.model';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment'

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    private myUserUrl = environment.server;

    constructor(private http: HttpClient){}

    public getAllEmployees(): Observable<EmployeeModel[]>
    {
        return this.http.get<EmployeeModel[]>(this.myUserUrl);
    }

    public getEmployeeById(): Observable<EmployeeModel>
    {
        return this.http.get<EmployeeModel>(this.myUserUrl + "/1");
    }
}