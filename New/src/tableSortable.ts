 import {Component, Input} from 'angular2/core'
import {OrderBy} from "./orderBy"
import {Format} from "./format"

@Component({
  selector: 'table-sortable',
  templateUrl: 'src/tableSortable.html',
  pipes: [OrderBy, Format]
})
export class TableSortable {
  
  @Input() columns: any[];
  @Input() data: any[];
  @Input() sort: any;
  
  selectedClass(columnName): string{
    return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
  }
  
  changeSorting(columnName): void{
    var sort = this.sort;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }
}