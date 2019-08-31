import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome }
    },
    {
        path: 'cadastrar',
        loadChildren: './cadastrar/cadastrar.module#CadastrarModule',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome }
    },
    {
        path: 'resetar-senha',
        loadChildren: './resetar-senha/resetar-senha.module#ResetarSenhaModule',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
