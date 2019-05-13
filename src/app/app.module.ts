import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenuTop} from './menuTop.component/menu.component';
import {InputSearchComponent} from './input-search.component/input-search.component';
import {SectionsComponent} from './sections.component/sections.component';
import {ContPrecoComponent} from './cont-preco.component/cont-preco.component';
import {FeaturesComponent} from './features.component/features.component';
import {ContTextComponent} from './cont-text.component/cont-text.component';
import {ExternalLinksComponent} from './external-links.component/external-links.component';
import {PainelComponent} from './painel.component/painel.component';
import {ItemListaPrecoComponent} from './itemListaPreco.component/itemListaPreco.component';
import { PrecosService } from './precos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuTop,
    InputSearchComponent,
    SectionsComponent,
    ContPrecoComponent,
    FeaturesComponent,
    ContTextComponent,
    ExternalLinksComponent,
    PainelComponent,
    ItemListaPrecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PrecosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
