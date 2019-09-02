import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-resetar-senha',
    templateUrl: './resetar-senha.component.html',
    styleUrls: ['./resetar-senha.component.scss']
})
export class ResetarSenhaComponent implements OnInit {
    form: FormGroup;

    sucesso: boolean;
    errorLogin: boolean;
    aguardando: boolean;

    constructor(private fb: FormBuilder,
                private angularFireAuth: AngularFireAuth) {
        this.form = fb.group({
            email: [null, [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {
    }

    alterarSenha() {
        this.aguardando = true;
        this.angularFireAuth.auth
            .sendPasswordResetEmail(this.form.get('email').value)
            .then(() => {
                this.sucesso = true;
            }).catch(err => {
                console.error('[ERROR] {TopNav} - Erro', err);
                this.aguardando = false;
                this.errorLogin = true;
            });

    }
}
