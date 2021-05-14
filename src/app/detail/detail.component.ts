import { Component, Input, OnInit } from '@angular/core';
import { Thing, Prop } from '../app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() thing: Thing;
  constructor() { }

  ngOnInit(): void {
  }

}
