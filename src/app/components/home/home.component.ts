import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { IfStmt } from '@angular/compiler';
import { HomeService } from './home.service';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
// import { validatePeopleValidator } from './validators/peopleBulbs.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<div></div>`,

  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'bulbs';
  bulbForm: FormGroup;
  isSubmitted: boolean;
  // bulbResult: BulbResponse;
  bulbs: number;
  isOutOfRange: boolean;
  clearForm = false;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private homeService: HomeService, private router: Router) {

  }

  ngOnInit() {
    this.homeService.clearFormEmitter
      .subscribe((clearForm) => {

        if (clearForm) {
          this.resetForm();
        }

      });

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
    this.isOutOfRange = false;
    console.log(people);
    console.log(bulb);

    if (bulb && people) {
      // tslint:disable-next-line:radix
      if (Number(people) < Number(bulb)) {

        this.isOutOfRange = true;

      }

    if (this.bulbForm.invalid) {
      return;
    }

      console.log('outofrange', this.isOutOfRange);
      if (!this.bulbForm.errors && !this.isOutOfRange) {

        this.calculateBulbs(people, bulb)
          .pipe(
            flatMap((resp: BulbResponse) => {
              if (resp && resp.BulbList) {


                this.homeService.sharedFormData = resp;
                this.router.navigate(['/results']);

              }
              return of('');
            })
          ).subscribe(() => { console.log('all got subscribed'); });


      }




    }
  }
  resetForm() {

    this.isSubmitted = false;
    this.isOutOfRange = false;
    this.bulbForm.reset({ bulb: 0, people: 0 });
  }
  isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  }
  calculateBulbs(people: number, bulbs: number): Observable<BulbResponse> {

    const result = new BulbResponse();
    result.BulbList = new Array<number>();
    // check if people is equal to or greater than
    if (Number(people) >= Number(bulbs)) {
      // test against 100 people and bulbs
      // find all square numbers between 1 and 'bulbs'



      // tslint:disable-next-line:no-bitwise
      for (let i = 0; (Math.pow((i + 1), 2)) <= bulbs; i++) {
        // tslint:disable-next-line:no-bitwise
        // console.log('index ender', ((i + 1) ^ 2));
        const bulb = Math.pow((i + 1), 2);
        result.BulbList.push(bulb);
      }
      // push square number bulbs into array
      // return count on bulbs in array

    } else {
      // itteration will be less becase there isnt enough people to match all the bulbs




    }

    result.NumberOfBulbsOn = result.BulbList.length;
    return of(result);
  }
}
class BulbResponse {
  NumberOfBulbsOn: number;
  BulbList: Array<number>;
}
