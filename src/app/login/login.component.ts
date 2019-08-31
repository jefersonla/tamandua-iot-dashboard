import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    errorLogin: boolean;
    aguardando: boolean;

    constructor(private router: Router,
                private fb: FormBuilder,
                private angularFireAuth: AngularFireAuth) {
        this.form = fb.group({
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.required, Validators.minLength(6)]],
        });
        this.aguardando = false;
    }

    ngOnInit() {
    }

    onLogin() {
        this.aguardando = true;
        this.angularFireAuth.auth
            .signInWithEmailAndPassword(
                this.form.get('email').value,
                this.form.get('senha').value
            ).then(() => {
                this.aguardando = false;
                return this.router.navigate(['']);
            }).catch(err => {
                console.error('[ERROR] {TopNav} - Erro', err);
                this.aguardando = false;
                this.errorLogin = true;
            });
    }
}
