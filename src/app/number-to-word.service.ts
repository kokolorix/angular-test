import { Injectable } from '@angular/core';
import * as converter from 'number-to-words';

@Injectable({
  providedIn: 'root'
})
export class NumberToWordService {

  constructor() { }

   toWords(n:string | number){
     return converter.toWords(n);
   }
}

