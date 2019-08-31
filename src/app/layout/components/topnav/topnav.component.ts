import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;

    constructor(public router: Router,
                private translate: TranslateService,
                private angularFireAuth: AngularFireAuth) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    logout() {
        this.angularFireAuth.auth
            .signOut()
            .then(() => {
                return this.router.navigate(['login']);
            }).catch(err => {
                console.error('[ERROR] {TopNav} - Erro', err);
        });
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
