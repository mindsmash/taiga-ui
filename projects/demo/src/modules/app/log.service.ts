import {Inject, Injectable} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';

@Injectable()
export class LogService {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    log(value: any) {
        this.notifications.show(String(value)).subscribe();
    }

    event(eventName: string, value: any) {
        this.notifications
            .show(String(value), {label: `event (${eventName})`})
            .subscribe();

        console.log(eventName, value);
    }
}
