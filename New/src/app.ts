//our root app component
import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common'
import {TableSortable} from './tableSortable'
import  {onTestGet} from'http-test.component'
@Component({
  selector: 'my-app',
  templateUrl: 'src/app.html',
  directives: [CORE_DIRECTIVES, TableSortable,ROUTER_DIRECTIVES,HTTPTestComponent]
})



export class App {
  
  rows: any[] =onTestGet.getData ;
  columns: any[] = [
    {
      display: 'time', //The text to display
      variable: 'time', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'seconds', //The text to display
      variable: 'Amount', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    },
    {
      display: 'date', //The text to display
      variable: 'Date', //The name of the key that's apart of the data array
      filter: 'dateTime' //The type data type of the column (number, text, date, etc.)
    }
  ];
  sorting: any = {
    column: 'time', //to match the variable of one of the columns
    descending: false
  };
}