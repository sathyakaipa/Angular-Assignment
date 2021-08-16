import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-fa',
  templateUrl: './fa.component.html',
  styleUrls: ['./fa.component.css']
})
export class FaComponent implements OnInit {
  
  fa = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    Phoneno:new FormControl(''),
    Address:new FormControl(''),
  });
  title='asiignment';

  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
     localStorage.setItem("formdata",JSON.stringify(this.fa.value))
  }
  updateProfile() {
    localStorage.setItem("formdata",JSON.stringify(this.fa.value))
  } 
  removeItem()
  {
    localStorage.removeItem('formdata');
  }

}
