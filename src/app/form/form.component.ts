import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataform = this.fb.group({
    name1: [''],
    age1: Number
    });
    data = [{ name1: '', age1: '', index: '' }];
    i = 0;
    result: Array<object> = [{ name1: '', age1: '', index: '' }];
    status = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  update(formvalue: any) {

    this.i = this.i + 1;
    console.log(this.i);

    formvalue.index = this.i;
    console.log(formvalue);
    this.data[this.i] = formvalue;
    this.status = true;

    this.result = this.data.filter (
      (data) => {
        return data.name1 !== '';
      }
        );

    // console.log(this.data[this.i]);
    // this.data[this.i].age2 = formvalue.age1;
    console.log(this.result);

    }


}
