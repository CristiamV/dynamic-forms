import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Rules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  pattern?: RegExp;
}
export interface FormModel {
  name: string;
  type: string;
  label: string;
  position:number;
  options?: any[];
  rules: Rules;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-forms';
  rules: Rules = {};
  nameFormCtrl: FormModel = {
    name: 'nameFormCtrl',
    type: 'text',
    label: 'Nombres',
    position: 1,
    rules: {
      required: true,
    },
  };
  emailFormCtrl: FormModel = {
    name: 'emailFormCtrl',
    type: 'email',
    label: 'Email',
    position: 3,
    rules: {
      required: true,
      email: true,
    },
  };
  countriesFormCtrl: FormModel = {
    name: 'countriesFormCtrl',
    type: 'select',
    label: 'Pais de Residencia',
    position: 2,
    options:[],
    rules: {
      required: true,
    },
  };
  models: FormModel[] = [
    this.nameFormCtrl,
    this.emailFormCtrl,
    this.countriesFormCtrl,
  ];
  fields: FormControl[] = [];

}
