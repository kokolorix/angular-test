import { Component } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'test';

  things:Array<Thing> = [
    {id:1,name:'one'},
    {id:2,name:'two'},
    {id:3,name:'three'},
    {id:4,name:'four'},
  ];

   clickit(){
    let things = this.things;
    console.log(`from ${JSON.stringify(things)}`);

    let search = 'five';
    let idx = things.findIndex(t => t.name === search);
    console.log(`found '${search}' with index: ${idx}`);
    if(idx > -1)
      things.splice(idx,1);

    search = 'two';
    idx = things.findIndex(t => t.name === search);
    console.log(`found '${search}' with index: ${idx}`);
    if(idx > -1)
      things.splice(idx,1);

    things.unshift({id:5,name:'five'});
    console.log(`from ${JSON.stringify(things)}`);
  }

}
export class Thing{
  id : number;
  name:string;
}
