import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from './../_guards/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{

    private isAuthenticated: boolean;

    loginForm: FormGroup;
    isSubmitted = false;

    constructor(private authService: AuthService,
        private _router: Router, private formBuilder: FormBuilder
    ){
        console.log('construtor...');
        if(this.isAuthenticated)
            this._router.navigate(['/loadpage'])
    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
          });
    }

    login(): void{
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if(this.loginForm.invalid){
          return;
        }
        this.authService.login(this.loginForm.value);
        this._router.navigateByUrl('/loadpage');
        //if(this.isAuthenticated)
        //this._router.navigate(['/loadpage'])
    }

    popup(event: Event): void{
        console.log('Click!', event);
        this._router.navigate(['/loadpage'])
    }

    onSubmit() { 
        this.isAuthenticated = true; 
        console.log('onSubmit');
    }
}