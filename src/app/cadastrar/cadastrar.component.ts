import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

    form: FormGroup;

    sucesso: boolean;
    errorLogin: boolean;

    constructor(private fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            nome: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            senha: [null, [Validators.minLength(6), Validators.required]]
        });
    }

    ngOnInit() {
    }

    cadastrar() {
        console.log('TODO', this.form.value);
        this.sucesso = true;
        // this.errorLogin = true;
        // this.router.navigate(['/dashboard']);
    }

}
