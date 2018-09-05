import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { BulbResponse } from './model/BulbResponse';
// import { validatePeopleValidator } from './validators/peopleBulbs.validator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bulbs';
  bulbForm: FormGroup;
  isSubmitted: boolean;
  bulbResult: BulbResponse;
  bulbs: number;
  isOutOfRange: true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isSubmitted = false;
    this.bulbForm = this.formBuilder.group({
      'bulb': [
        0, Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[0-9]*$')
          ]
        )
      ],
      'people': [

        0, Validators.compose(
          [
            Validators.required,
            Validators.pattern('^[0-9]*$')
          ]
        ),
        // validatePeopleValidator(this.bulbs)
      ]


    });

  }

  get f() { return this.bulbForm.controls; }

  submitForm() {

    const bulb = this.f['bulb'].value;
    const people = this.f['people'].value;
    this.isSubmitted = true;

    if (bulb && people) {

      if (Number(people) < Number(bulb)) {

        this.isOutOfRange = true;

      } else {

        this.bulbResult = this.calculateBulbs(people, bulb);


      }
    }
  }

  calculateBulbs(people: number, bulbs: number): BulbResponse {

    const result = new BulbResponse();
    result.BulbList = new Array<number>();

    // check if people is equal to or greater than
    if (Number(people) >= Number(bulbs)) {

      // find square numbers without exceding number of bulbs
      // only loop through neccassary bulbs that need to be added to array
      for (let i = 0; (Math.pow((i + 1), 2)) <= bulbs; i++) {

        // push bulb number into results array
        const bulb = Math.pow((i + 1), 2);
        result.BulbList.push(bulb);
      }

    } else {

      // TODO: figure out algorithm and pattern to calculate
      // when bulbs it are greater than people
    }

    result.NumberOfBulbsOn = result.BulbList.length;
    return result;
  }
}

