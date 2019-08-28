import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastrarComponent} from './cadastrar.component';

import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: CadastrarComponent
    }
];

@NgModule({
    declarations: [CadastrarComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class CadastrarModule {
}
