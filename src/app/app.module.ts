import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './shared/components/header/header.component';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PortalModule,
    MatDialogModule,
  ],
  providers:  [
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
