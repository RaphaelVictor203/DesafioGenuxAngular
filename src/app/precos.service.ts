import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrecosService{
    
    //propriedade
    precosUrl = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH&tsyms=BTC,USD,EUR&api_key=b542def189a74fa5d4b10bd9c35325026d18fedf94e1662863ddb5985c3ebb66";

    constructor(private http: HttpClient){}

    listarPrecos(){
        return this.http.get<any[]>(`${this.precosUrl}`); //Forma de se utilizar uma propriedade
    }

}
