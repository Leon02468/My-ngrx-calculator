import { createReducer, on } from "@ngrx/store";
import { Counter } from "src/models/counter.model";
// import { decrement, increment, reset } from "../actions/counter.action";
import * as CounterActions from '../actions/counter.action';

let initialState = <Counter>{count : 0};

export const counterReducer = createReducer(
    initialState,
    on(CounterActions.increment, (state) => ({count : state.count + 1})),
    on(CounterActions.decrement, (state) => ({count : state.count - 1})),
    on(CounterActions.reset, (state) => ({count : 0})),
)