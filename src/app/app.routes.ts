import { Routes } from "@angular/router/src/config";
import { WeatherComponent } from "./weather/weather.component";
import { MovieComponent } from "./movie/movie.component";
import { CurrencyComponent } from "./currency/currency.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { PeParentComponent } from "./pe-parent/pe-parent.component";
import { PeChildComponent } from "./pe-child/pe-child.component";


export const routes: Routes = [
    { path: 'menu', redirectTo: '', pathMatch: 'full' },
    { path: 'weather', component: WeatherComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    {path:'parent',component:PeParentComponent},
    {path:'child',component:PeChildComponent}
  ]; 