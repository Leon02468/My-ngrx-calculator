import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cal } from 'src/models/cal.model';
import * as calActions from '../../ngrx/actions/cal.action'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  number$: Observable<Cal>

  constructor(private store : Store<{cal : Cal}>){
    this.number$ = store.select('cal');
  }

  ngOnInit(): void {
    this.number$.subscribe((data) => {
      console.log(data)
    })
  }

  pressKey(key: string, key_type: string){
    this.store.dispatch(
      calActions.press_key({key: key, key_type : key_type})
    )
  }
  // arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // screen_arr : number[] = [];
  // input_num : String = '';

  // old_num : number = 0;
  // result :number = 0;

  // a : number = 0;
  // b : number = 0;

  // plus : boolean = false;
  // minus : boolean = false;
  // multi : boolean = false;
  // div : boolean = false;

  // start_typing : boolean = true;

  
  // input(i : number): void{
  //   if(this.start_typing == true){
  //     this.input_num = '';
  //     this.screen_arr = [];
  //     this.old_num = 0;
  //   }
  //   this.screen_arr?.push(i);
  //   for(let j = 0; j < this.screen_arr.length; j++){
  //     this.result = this.old_num + this.screen_arr[j];
  //   }
  //   this.old_num = this.result * 10;
  //   this.input_num = String(this.result);
  //   console.log(this.screen_arr);
  //   this.start_typing = false;
  // }

  // input_plus(){
  //   if(this.plus == true || this.minus == true || this.multi == true || this.div == true){
  //     this.cal_plus();
  //   }
  //   this.plus = true;
  //   this.a = this.result;
  //   this.start_typing = true;
  //   this.input_num += '+';
  // };
  // input_minus(){
  //   if(this.plus == true || this.minus == true || this.multi == true || this.div == true){
  //     this.cal_minus();
  //   }
  //   this.minus = true;
  //   this.a = this.result;
  //   this.start_typing = true;
  //   this.input_num += '-';
  // };
  // input_multi(){
  //   if(this.plus == true || this.minus == true || this.multi == true || this.div == true){
  //     this.cal_multi();
  //   }
  //   this.multi = true;
  //   this.a = this.result;
  //   this.start_typing = true;
  //   this.input_num += '*';
  // };
  // input_div(){
  //   if(this.plus == true || this.minus == true || this.multi == true || this.div == true){
  //     this.cal_div();
  //   }
  //   this.div = true;
  //   this.a = this.result;
  //   this.start_typing = true;
  //   this.input_num += '/';
  // };

  // input_equal(){
  //   if(this.plus == true){
  //     this.cal_plus();
  //   }
  //   if(this.minus == true){
  //     this.cal_minus();
  //   }
  //   if(this.multi == true){
  //     this.cal_multi();
  //   }
  //   if(this.div == true){
  //     this.cal_div();
  //   }
  //   this.start_typing = true;
  // }

  // cal_plus(){
  //   this.b = this.result;
  //   this.result = this.a + this.b;
  //   this.a = this.result;
  //   this.b = 0;
  //   this.plus = false;
  //   this.input_num = String(this.a);
  // }

  // cal_minus(){
  //   this.b = this.result;
  //   this.result = this.a - this.b;
  //   this.a = this.result;
  //   this.b = 0;
  //   this.minus = false;
  //   this.input_num = String(this.a);
  // }

  // cal_multi(){
  //   this.b = this.result;
  //   this.result = this.a * this.b;
  //   this.a = this.result;
  //   this.b = 0;
  //   this.multi = false;
  //   this.input_num = String(this.a);
  // }

  // cal_div(){
  //   this.b = this.result;
  //   this.result = this.a / this.b;
  //   this.a = this.result;
  //   this.b = 0;
  //   this.div = false;
  //   this.input_num = String(this.a);
  // }
}
