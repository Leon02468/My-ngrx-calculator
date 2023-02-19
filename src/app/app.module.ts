import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './ngrx/reducers/counter.reducer';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { calReducer } from './ngrx/reducers/cal.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {cal : calReducer},
      {}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
