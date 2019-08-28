import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-resetar-senha',
    templateUrl: './resetar-senha.component.html',
    styleUrls: ['./resetar-senha.component.scss']
})
export class ResetarSenhaComponent implements OnInit {
    form: FormGroup;

    sucesso: boolean;
    errorLogin: boolean;

    constructor(private fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            email: [null, [Validators.required, Validators.email]],
        });
    }

    ngOnInit() {
    }

    alterarSenha() {
        console.log('TODO', this.form.value);
        this.sucesso = true;
        // this.errorLogin = true;
        // this.router.navigate(['/dashboard']);
    }
}
