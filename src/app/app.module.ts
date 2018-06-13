import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { Http, HttpModule } from '@angular/http';
import { LoginService } from './common/service/login.service';
import { HttpClientCustom } from './common/service/httpclient.service';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'main', loadChildren: './shared/layout/layout.module#LayoutModule'}
    ], { useHash: true })
  ],
  providers: [LoginService,HttpClientCustom,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
