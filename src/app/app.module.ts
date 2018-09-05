import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent } from './components/header/header.component';

import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule, MatMenuModule, MatButtonModule,
        MatIconModule, MatInputModule, MatTableModule} from '@angular/material';
import { HomeService } from './components/home/home.service';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
