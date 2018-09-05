import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function validatePeopleValidator( bulbs: number): AsyncValidatorFn {

    return (ctrl: AbstractControl): Observable<{ [key: string]: boolean } | null> => {
        console.log('this is bulbs', bulbs);
        console.log('this is people', ctrl.value);

        if (bulbs <= ctrl.value) {
            // tslint:disable-next-line:no-unused-expression
            return of({'validNumber': true});
        }
        return of(null);
    };

}


