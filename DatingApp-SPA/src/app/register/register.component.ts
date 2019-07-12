import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter();
  model: any = {};

    constructor(private authService: AuthService, private alertify: AlertifyService) {}

    ngOnInit() {}

    register() {
        this.authService.register(this.model).subscribe(() => {
            this.alertify.success('registration successfull');
        },
        error => {
            this.alertify.error(error);
        });
    }

    cancel() {
        this.cancleRegister.emit(false);
        this.alertify.message('cancelled');
    }
}
