import { Injectable } from "@angular/core";
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    constructor(){}

    public login(userInfo: User){
        localStorage.setItem('ACCESS_TOKEN', 'access_token');
    }

    public isLoggedIn(){
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }

    public logout(){
        localStorage.removeItem('ACCESS_TOKEN');
    }
}