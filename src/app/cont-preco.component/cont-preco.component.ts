import { Component } from '@angular/core';
import { PrecosService } from '../precos.service';

@Component({
    selector: 'app-cont-preco',
    templateUrl: './cont-preco.component.html',
    styleUrls: ['./cont-preco.component.css']
})

export class ContPrecoComponent{

    precos: Array<any>;
    preco: object;
    loaded: boolean = false;

    constructor(private precosService: PrecosService){
        this.atualizarItems("");
    }

    atualizarItems(itemSel){
        if(itemSel != ""){
            this.precosService.listarPrecos().subscribe(dados => {
                this.precos = dados;
                this.precos = Object.keys(dados).map(function (key) { return dados[key]; });
                switch(itemSel){
                    case "BTC":
                        this.preco = this.precos[0];
                        break;
                    case "ETH":
                        this.preco = this.precos[1];
                        break;
                    case "DASH":
                        this.preco = this.precos[2];
                        break;
                }
                this.loaded = true;
            });
        }
    }   

}