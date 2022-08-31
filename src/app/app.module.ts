import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './shared/initializers/initializer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarningComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    InButtonModule,
    KeycloakAngularModule,
    MatDialogModule,
    PortalModule,
  ],
  providers:  [
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
