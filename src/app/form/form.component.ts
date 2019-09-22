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
    data: Array<object> = [{ name1: '', age1: '', index: ''}];
    i = 0;
    n = 1;
    result: Array<object>;
    status = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
  update(formvalue: any) {

    console.log(this.i);
    formvalue.index = this.i; // Setindex
    console.log(formvalue);
    this.data[this.i] = formvalue; // Input data
    this.status = true;
    this.result = this.data; // Set data
    this.i++; // Update to next index
    // console.log(this.data[this.i]);
    // this.data[this.i].age2 = formvalue.age1;
    console.log(this.result);

    }

    search(searchdata: string) {
      console.log(searchdata);

    }


}
