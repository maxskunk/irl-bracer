import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [

        ChatWindowComponent],
    entryComponents: [],
    imports: [
        FlexLayoutModule,
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        FlexLayoutModule,
        ChatWindowComponent
    ]

})
export class SharedModule { }