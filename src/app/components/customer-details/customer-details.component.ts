import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerForm = this.fb.group({
    // Мы можем задать несколько валидаторов черзе Validators.compose
    firstName: ['У меня есть начальное значение', Validators.compose(
      [Validators.required, Validators.maxLength(30)]
    )],
    lastName: ['', Validators.required],
    // А можем задать несколько валидаторов и массивом валидаторов, без вызова compose
    phoneNumber: ['', [Validators.required, Validators.min(7), Validators.max(11)]],
    // Дочерняя группа
    address: this.fb.group({
      street: ['', Validators.required],
      aptNumber: ['', Validators.compose([
        Validators.required, Validators.pattern(/\d+/)
      ])],
      city: ['', Validators.required],
      floor: [1, Validators.required]
    })
  });

  // Получаем поле по имени
  get firstName() { return this.customerForm.get('firstName'); }
  get lastName() { return this.customerForm.get('lastName'); }
  // Получаем поле из подгруппы
  get aptNumber() { return this.customerForm.get('address').get('aptNumber'); }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Логгируем группу, чтобы можно было посмотреть все поля в консольке
    console.log(this.customerForm);
    this.customerForm.valueChanges.subscribe(v => console.log(v));
  }

  onSubmit() {
    console.log(this.customerForm.invalid);
    // Так можно сбросить данные формы после отправки
    this.customerForm.reset();
  }

}
