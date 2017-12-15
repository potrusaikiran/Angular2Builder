import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';

import { SharedService } from './shared.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'menu', redirectTo: '', pathMatch: 'full' },
  { path: 'weather', component: WeatherComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MovieComponent,
    CurrencyComponent,
    MenuComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
