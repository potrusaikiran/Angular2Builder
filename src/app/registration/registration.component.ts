import { Component, OnInit } from '@angular/core';
import { SignUp } from './SignUp';
import { Guid } from './../guid';
import { HttpModule, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [`p{font-weight:bold;color:orange} h1 { font-weight:normal;color:orange}`]
})
export class RegistrationComponent implements OnInit {
  postResponse: SignUp;
  signup: any = { Id: null, Salutation: null, FirstName: null, LastName: null, MiddleName: null, Gender: null, DOB: null, Email: null, Password: null, PhoneNumber: null, Country: null };
  constructor(private http: Http) { }
  ngOnInit() {

  }
  SaveSignUp() {
    this.signup.Id = Guid.Empty();
    return this.http.post('http://192.168.0.145/tradeappdev/api/tradeapp/saveuser', this.signup)
      .map((res: Response) => res.json())
      .subscribe((res: SignUp) => { this.postResponse = res; console.log(res); })
  }

}
