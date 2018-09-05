import { Injectable, Output, EventEmitter } from '@angular/core';
import { BulbResponse } from './../../model/BulbResponse';
@Injectable()
export class HomeService {

    isClear = false;

    public sharedFormData: BulbResponse = new BulbResponse();

    @Output() clearFormEmitter: EventEmitter<boolean> = new EventEmitter();

    clearForm() {
        this.isClear = true;
        this.clearFormEmitter.emit(this.isClear);
    }

}

