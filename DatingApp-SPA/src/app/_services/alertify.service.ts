import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
    providedIn: 'root',
})
export class AlertifyService {
    constructor() {}

    confirm(message: string, okCallback: (e: any) => any) {
        alertify.confirm(message, (e: any) => {
            if (e) {
                okCallback(e);
            }
        });
    }

    success(message: string) {
      alertify.success(message);
    }

    error(error: string) {
      alertify.error(error);
    }

    warning(message: string) {
      alertify.warning(message);
    }

    message(message: string) {
      alertify.message(message);
    }
}
