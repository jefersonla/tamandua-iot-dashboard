import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

    form: FormGroup;

    aguardando: boolean;
    sucesso: boolean;
    errorLogin: boolean;

    constructor(private fb: FormBuilder,
                private angularFireAuth: AngularFireAuth) {
        this.form = fb.group({
            nome: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.minLength(6), Validators.required]]
        });
        this.aguardando = false;
    }

    ngOnInit() {
    }

    cadastrar() {
        if (!this.form.get('nome').valid ||
            !this.form.get('email').valid ||
            !this.form.get('senha').valid) {
            return;
        }

        this.aguardando = true;
        this.angularFireAuth.auth.createUserWithEmailAndPassword(
            this.form.get('email').value,
            this.form.get('senha').value
        ).then(user => {
            return user.user.updateProfile({
                displayName: this.form.get('nome').value
            });
        }).then(() => {
            this.sucesso = true;
            this.aguardando = false;
        }).catch(() => {
            this.aguardando = false;
        });
    }

}
