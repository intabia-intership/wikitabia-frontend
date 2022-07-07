import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { InButtonModule } from '@intabia/angular-ui';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { WarningComponent } from 'src/app/shared/components/modals/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PortalModule,
    MatDialogModule,
    InButtonModule,
  ],
  providers:  [
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
