import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    errorLogin: boolean;

    constructor(private router: Router, private fb: FormBuilder) {
        this.form = fb.group({
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit() {
    }

    onLogin() {
        // this.errorLogin = true;
        // return;

        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
