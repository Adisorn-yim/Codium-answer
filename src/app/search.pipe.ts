import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  private searchedItems: Array<any> = [];
  private key: string;
  private prop: string;
  private childrenPropName: string;


  transform(value: any, key?: any, prop?: any, childrenProp?: any): any {
    }
}
