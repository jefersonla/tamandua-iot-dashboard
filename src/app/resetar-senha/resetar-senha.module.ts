import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResetarSenhaComponent} from './resetar-senha.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: ResetarSenhaComponent
    }
];

@NgModule({
    declarations: [ResetarSenhaComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class ResetarSenhaModule {
}
