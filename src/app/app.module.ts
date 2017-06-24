import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
import {LoginModule} from "./containers/login/login.module";
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import {Global} from "./components/service/global";
import {AuthGuard} from "./components/service/authguard.service";
import {EventModule} from "./containers/event/event.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationModule} from "./components/common/navigation/navigation.module";
import {TopnavbarModule} from "./components/common/topnavbar/topnavbar.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular modules
    BrowserModule,
    NgbModule.forRoot(),
    // Modules
    LayoutsModule,
    NavigationModule,
    TopnavbarModule,

    // Views
    LoginModule,

    EventModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    Global,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
