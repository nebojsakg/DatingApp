import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
        confirmPassword: new FormControl('', Validators.required)
      },
      this.passwordMatchValidator
    );
  }

  createREgisterForm() {
    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
  }

  register() {
    // this.authService.register(this.model).subscribe(() => {
    //     this.alertify.success('registration successfull');
    // },
    // error => {
    //     this.alertify.error(error);
    // });
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancleRegister.emit(false);
    this.alertify.message('cancelled');
  }
}
