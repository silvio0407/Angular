import { Component, Injectable } from '@angular/core';
import {EmployeeService} from './../service/employee.service';
import {EmployeeModel} from './../model/employee.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'loading',
    templateUrl: './../loading/loading.component.html',
  })

@Injectable()
export class LoadingService {

    employees = new Array<EmployeeModel>();

    constructor(private empService:EmployeeService){
    }

    public loadEmployees(): Observable<EmployeeModel[]> {

       return  this.empService.getAllEmployees();

    }
}