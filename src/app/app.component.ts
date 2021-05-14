import { Component } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { NumberToWordService } from './number-to-word.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(
    private readonly ntw: NumberToWordService
  ) 
  {
    this.selected = this.things[0];
  }
  title = 'test';

  things: Array<Thing> = [
    { id: 1, name: 'one', properties: [{name:'aProp',value:'aValue'},{name: 'bProp', value:3}] },
    { id: 2, name: 'two' },
    { id: 3, name: 'three', properties: [{name:'aProp',value:'aValue'},{name: 'bProp', value:3}] },
    { id: 4, name: 'four' },
  ];
  maxNumber: number = 9999;
  selected: Thing;

  doSelect(t: Thing) {
    console.log(JSON.stringify(this.selected));

    if (this.selected === t)
      this.selected = undefined;
    else
      this.selected = t;
      
    console.log(JSON.stringify(this.selected));
  }

  doAdd() {
    let newOne = Math.round(Math.random() * this.maxNumber);
    let t: Thing = { id: newOne, name: this.ntw.toWords(newOne), properties: [] };
    let props = Math.round(Math.random() * 15);
    for(let i = 1; i < props; ++i)
    {
      t.properties.push({name:`Prop ${this.ntw.toWords(i)}`, value:`Value${i}`})
    }
    this.things.push(t);
    this.selected = t;
  }

  doRemove(t: Thing) {
    console.log(JSON.stringify(t));
    if(this.selected === t)
      this.selected = undefined;

    let things = this.things;
    let idx = things.findIndex(t1 => t1.id == t.id);
    if (idx > -1)
      things.splice(idx, 1);
  }

  clickit() {
    let things = this.things;
    console.log(`from ${JSON.stringify(things)}`);

    let search = 'five';
    let idx = things.findIndex(t => t.name === search);
    console.log(`found '${search}' with index: ${idx}`);
    if (idx > -1)
      things.splice(idx, 1);

    search = 'two';
    idx = things.findIndex(t => t.name === search);
    console.log(`found '${search}' with index: ${idx}`);
    if (idx > -1)
      things.splice(idx, 1);

    things.unshift({ id: 5, name: 'five' });
    console.log(`from ${JSON.stringify(things)}`);
  }

}
export class Thing {
  id: number;
  name: string;
  properties?: Prop[];
}

export class Prop{
  name: string;
  value?: object|string|number|boolean;
}
