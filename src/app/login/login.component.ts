
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // tslint:disable-next-line:max-line-length
  styles: ['p{font-weight:bold;color:orange} h1 { font-weight:normal;color:orange} table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%} td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}']
})
export class LoginComponent implements OnInit {
  id_email = '';
  id_password = '';
  emailpass = [];
  emailpas = { name: null, pass: null };
  form: FormGroup;
  isexist = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required, Validators.minLength(3)],
    });
  }
  Signin() {
    if (this.emailpas.name == null || this.emailpas.pass == null) {
      alert('Please enter valid data...!!!');
    }
    for (let i = 0; i < this.emailpass.length; i++) {
      if (this.emailpass[i].name === this.emailpas.name) {
        alert('already table consists of : ' + this.emailpas.name + ' user');
        this.isexist = true;
      }
    }
    if (this.emailpas.name && this.emailpas.pass && !this.isexist) {
      const copy = Object.assign({}, this.emailpas);
      this.emailpass.push(copy);
      console.log(this.emailpass);
    }
    this.emailpas.name = null;
    this.emailpas.pass = null;
    this.isexist = false;
  }
  editrecord(emailp) {
    this.emailpas.name = emailp.name;
    this.emailpas.pass = emailp.pass;
  }
  deleterecord(emailp) {
    for (let i = 0; i < this.emailpass.length; i++) {
      if (this.emailpass[i].name === emailp.name) {
        this.emailpass.splice(i, 1);
      }
    }

  }
}
