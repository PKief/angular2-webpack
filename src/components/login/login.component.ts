import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

// let styles = String(require('./login.component.scss'));

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styles: [ require('./login.component.scss') ] 
})
export class LoginComponent {

    username: String;
    password: String;

    constructor(private loginService: LoginService, private router: Router) { }

    submitLogin(){        
        this.loginService.login();
    }    
}