import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter();
  model: any = {};

    constructor(private authService: AuthService) {}

    ngOnInit() {}

    register() {
        this.authService.register(this.model).subscribe(() => {
            console.log('registration successfull');
        },
        error => {
            console.log(error);
        });
    }

    cancel() {
        this.cancleRegister.emit(false);
        console.log('cancelled');
    }
}