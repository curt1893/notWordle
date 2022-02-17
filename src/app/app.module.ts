import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { WordComponent } from './components/word/word.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { BoardComponent } from './components/board/board.component';
import { BlankWordComponent } from './components/blank-word/blank-word.component';
import { LetterComponent } from './components/letter/letter.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WordComponent,
    KeyboardComponent,
    BoardComponent,
    BlankWordComponent,
    LetterComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
