import { createReducer, on } from "@ngrx/store";
import { Cal } from "src/models/cal.model";
import * as calActions from "../actions/cal.action"

let initialState = <Cal>{
    inputNumber : '0',
    screen : [],
    screenAfterDot : [],

    oldNumber: 0,
    currentNumber: 0,
    previousNumber: 0,
    result: 0,

    plus: false,
    minus: false,
    multi: false,
    div: false,

    start_typing: true
}

export const calReducer = createReducer(
    initialState,
    on(calActions.press_key, (state, action) => {
        if(action.key_type == 'number'){
            let newState = {...state};
            let getNum = parseFloat(action.key);
            if(newState.start_typing == true){
                newState.inputNumber = '';
                newState.screen = [];
                newState.screenAfterDot = [];
                newState.oldNumber = 0;
            }
            if(action.key == '.'){
                if(!state.inputNumber.includes('.')){
                    newState.oldNumber = newState.result;
                    newState.inputNumber = String(newState.result) + '.';
                    newState.start_typing = false
                }
                return newState
            }
            if(!state.inputNumber.includes('.') || newState.start_typing == true){
                newState.screen = Object.assign([], newState.screen);
                newState.screen.push(getNum);
                for(let j = 0; j < newState.screen.length; j++){
                    newState.result = newState.oldNumber + newState.screen[j];
                }
                newState.oldNumber = newState.result * 10;
                newState.inputNumber = String(newState.result);
                newState.start_typing = false;

                return newState;
            }
            else if(state.inputNumber.includes('.') && newState.start_typing == false){
                newState.screenAfterDot = Object.assign([], newState.screenAfterDot);
                newState.screenAfterDot.push(getNum);
                for(let j = 0; j < newState.screenAfterDot.length; j++){
                    newState.result = Math.round((newState.oldNumber + 
                    (newState.screenAfterDot[j] * Math.pow(10, (-(newState.screenAfterDot.length)))))
                    * (10**newState.screenAfterDot.length)) / (10**newState.screenAfterDot.length)
                }
                newState.oldNumber = newState.result;
                newState.inputNumber = String(newState.result);
                console.log();

                return newState;
            }
        }
        else if(action.key_type == 'operator'){
            let newState = {...state};
            if(action.key == '+'){ //PLUS
                if(newState.plus == true){
                    // cal_plus(newState.previousNumber, newState.currentNumber, newState.result, newState.plus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber + newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.plus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.minus == true){
                    // cal_minus(newState.previousNumber, newState.currentNumber, newState.result, newState.minus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber - newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.minus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.multi == true){
                    // cal_multi(newState.previousNumber, newState.currentNumber, newState.result, newState.multi, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber * newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.multi = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.div == true){
                    // cal_div(newState.previousNumber, newState.currentNumber, newState.result, newState.div, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber / newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.div = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                newState.plus = true;
                newState.previousNumber = newState.result;
                newState.start_typing = true;
                newState.inputNumber += '+';
            }
            else if(action.key == '-'){ //MINUS
                if(newState.plus == true){
                    // cal_plus(newState.previousNumber, newState.currentNumber, newState.result, newState.plus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber + newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.plus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.minus == true){
                    // cal_minus(newState.previousNumber, newState.currentNumber, newState.result, newState.minus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber - newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.minus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.multi == true){
                    // cal_multi(newState.previousNumber, newState.currentNumber, newState.result, newState.multi, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber * newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.multi = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.div == true){
                    // cal_div(newState.previousNumber, newState.currentNumber, newState.result, newState.div, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber / newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.div = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                newState.minus = true;
                newState.previousNumber = newState.result;
                newState.start_typing = true;
                newState.inputNumber = String(newState.previousNumber);
                newState.inputNumber += '-';
            }
            else if(action.key == '*'){ //MULTIPLY
                if(newState.plus == true){
                    // cal_plus(newState.previousNumber, newState.currentNumber, newState.result, newState.plus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber + newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.plus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.minus == true){
                    // cal_minus(newState.previousNumber, newState.currentNumber, newState.result, newState.minus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber - newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.minus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.multi == true){
                    // cal_multi(newState.previousNumber, newState.currentNumber, newState.result, newState.multi, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber * newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.multi = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.div == true){
                    // cal_div(newState.previousNumber, newState.currentNumber, newState.result, newState.div, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber / newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.div = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                newState.multi = true;
                newState.previousNumber = newState.result;
                newState.start_typing = true;
                newState.inputNumber = String(newState.previousNumber);
                newState.inputNumber += '*';
            }
            else if(action.key == '/'){ //DIVIDE
                if(newState.plus == true){
                    // cal_plus(newState.previousNumber, newState.currentNumber, newState.result, newState.plus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber + newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.plus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.minus == true){
                    // cal_minus(newState.previousNumber, newState.currentNumber, newState.result, newState.minus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber - newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.minus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.multi == true){
                    // cal_multi(newState.previousNumber, newState.currentNumber, newState.result, newState.multi, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber * newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.multi = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.div == true){
                    // cal_div(newState.previousNumber, newState.currentNumber, newState.result, newState.div, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber / newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.div = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                newState.div = true;
                newState.previousNumber = newState.result;
                newState.start_typing = true;
                newState.inputNumber = String(newState.previousNumber);
                newState.inputNumber += '/';
            }
            else if(action.key == '='){ //EQUAL
                if(newState.plus == true){
                    // cal_plus(newState.previousNumber, newState.currentNumber, newState.result, newState.plus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber + newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.plus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.minus == true){
                    // cal_minus(newState.previousNumber, newState.currentNumber, newState.result, newState.minus, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber - newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.minus = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.multi == true){
                    // cal_multi(newState.previousNumber, newState.currentNumber, newState.result, newState.multi, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber * newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.multi = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                else if(newState.div == true){
                    // cal_div(newState.previousNumber, newState.currentNumber, newState.result, newState.div, newState.inputNumber);
                    newState.currentNumber = newState.result;
                    newState.result = newState.previousNumber / newState.currentNumber;
                    newState.previousNumber = newState.result;
                    newState.currentNumber = 0;
                    newState.div = false;
                    newState.inputNumber = String(newState.previousNumber);
                }
                newState.start_typing = true;
            }
            else if(action.key == 'AC'){
                newState.inputNumber = '0';
                newState.screen = [];
                newState.screenAfterDot = [];

                newState.oldNumber = 0;
                newState.currentNumber = 0;
                newState.previousNumber = 0;
                newState.result = 0;

                newState.plus = false;
                newState.minus = false;
                newState.multi = false;
                newState.div = false;

                newState.start_typing = true
            }
            return newState;
        }
        return state;
    })
)


// const cal_plus = (a: number, b: number, result: number, plus : boolean, inputnum: string) => {
//     b = result;
//     console.log("current number: " + b);
//     result = a + b;
//     console.log("result: " + result);
//     a = result;
//     console.log("pre number: " + a);
//     b = 0;
//     plus = false;
//     inputnum = String(a);
// }

  

// function cal_minus(a: number, b: number, result: number, minus : boolean, inputnum: string){
//     b = result;
//     result = a - b;
//     a = result;
//     b = 0;
//     minus = false;
//     inputnum = String(a);
// }

// function cal_multi(a: number, b: number, result: number, multi : boolean, inputnum: string){
//     b = result;
//     result = a * b;
//     a = result;
//     b = 0;
//     multi = false;
//     inputnum = String(a);
// }

// function cal_div(a: number, b: number, result: number, div : boolean, inputnum: string){
//     b = result;
//     result = a / b;
//     a = result;
//     b = 0;
//     div = false;
//     inputnum = String(a);
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