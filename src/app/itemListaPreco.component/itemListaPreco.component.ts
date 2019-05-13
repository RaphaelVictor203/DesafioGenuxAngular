import { Component, Input } from '@angular/core';

@Component({
    selector: "app-item-preco",
    templateUrl: "./itemListaPreco.component.html",
    styleUrls: ["./itemListaPreco.component.css"]
})

export class ItemListaPrecoComponent{

    @Input() tipo : string;
    @Input() valor : string;

}