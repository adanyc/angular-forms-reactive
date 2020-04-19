import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    // *** Con FormBuilder
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    // *** Con FormGroup
    // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   date: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   text: new FormControl('', [Validators.required]),
    //   category: new FormControl('', [Validators.required]),
    //   gender: new FormControl('', [Validators.required])
    // });
    // *** Escuchar reactivamente
    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get emailField() {
    return this.form.get('email');
  }

  get textField() {
    return this.form.get('text');
  }

  doSomething(){
    console.log('Do Something called');
  }

}
