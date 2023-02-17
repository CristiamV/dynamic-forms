import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/app.component';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss']
})
export class DynamicSelectComponent implements OnInit {
  @Input() model!: FormModel;
  @Input() formName!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
