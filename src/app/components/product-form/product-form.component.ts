import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  emailCtrl = new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(4)]);

  constructor() {
    this.emailCtrl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(valor => {
        console.log('Valor: ', valor);
      });
  }

  ngOnInit(): void {
  }

  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

}
