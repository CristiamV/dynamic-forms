import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/app.component';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements OnInit {

  @Input() model!: FormModel;
  @Input() formName!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
