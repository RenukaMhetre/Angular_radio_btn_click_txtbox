import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import {ParentComponent} from './parent';
import {TextButtonComponent} from './TextButton';
import { AppComponent } from "src/child/Child";
import { FormsModule } from '@angular/forms';
import { TwoWay } from "./twoway";
@NgModule({
    declarations: [
        ParentComponent,AppComponent,TwoWay,TextButtonComponent
      ],
      imports: [
        BrowserModule,FormsModule
      ],
      bootstrap: [ParentComponent]
    })
export class ParentModule{

}