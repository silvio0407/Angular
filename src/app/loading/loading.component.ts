import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { LoadingService } from './../service/loading.service';
import { EmployeeModel } from '../model/employee.model';

@Component({
    selector: 'loading',
    templateUrl: 'loading.component.html'
})
export class LoadingComponent implements OnInit{
   
    constructor(
        private loadingService: LoadingService,
        private _router: Router
        ) {}

    employees = new Array<EmployeeModel>();
    
    ngOnInit() {
        console.log('LoadingComponent');
        this.loadingService.loadEmployees().subscribe(response =>
            {
                this.employees = response.map(item => 
                {
                    return new EmployeeModel(
                    item.id,
                    item.name,
                    item.status
                    );
                });
            });
    }

    public voltar(): void{
        this._router.navigate([''])
    }
    

}