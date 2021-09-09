import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DropdownModule} from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
