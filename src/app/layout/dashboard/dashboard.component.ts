import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    /**
     * Status do dispositivo
     */
    device1 = false;
    device2 = false;

    /**
     * Sensores
     */
    amplitudeSom = 0;
    nivelLuminosidade = 0;
    nivelPoeira = 0;
    temperaturaAr = 0;
    humidadeAr = 0;

    /**
     * Atuadores
     */
    statusLamp = false;

    constructor(private dbService: AngularFireDatabase) {
        this.dbService.object<{temperatura: number, umidade: number}>('dispositivos/device01/sensores')
            .snapshotChanges()
            .subscribe(sensoresFire => {
                const sensores = sensoresFire.payload.val();
                this.humidadeAr = sensores.umidade;
                this.temperaturaAr = sensores.temperatura;
            });
    }

    ngOnInit() {
    }

    alterar() {
        this.statusLamp = !this.statusLamp;
        // this.device2 = !this.device2;
    }
}
