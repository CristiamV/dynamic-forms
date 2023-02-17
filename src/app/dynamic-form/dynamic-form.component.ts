import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from '../app.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup!: FormGroup;
  @Input() models: FormModel[] = [];

  countriesData = [
    {
      nameSpanish: 'Venezuela',
      codeISO3: 'VEN',
      phoneDial: '58',
      codeTypeRisk: '',
    },
    {
      nameSpanish:    'Colombia',
      codeISO3:       'COL',
      phoneDial:      '57',
      codeTypeRisk:   ''
    },
    {
      nameSpanish:    'Estados Unidos',
      codeISO3:       'USA',
      phoneDial:      '1',
      codeTypeRisk:   ''
    }
  ];

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }
  getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of this.models) {
      formGroupFields[field.name] = new FormControl('');
    }
    return formGroupFields;
  }
  ngOnInit(): void {
    this.buildForm();
    this.models.forEach(model =>{
      if(model.name == 'countriesFormCtrl'){
        model.options = this.countriesData;
      }
    })
    console.log(this.dynamicFormGroup,this.models);
  }
}
