import { Component, OnInit } from '@angular/core';
import {DemoClass} from '../firscomp/DemoClass';
@Component({
  selector: 'app-firscomp',
  templateUrl: './firscomp.component.html',
  styleUrls: ['./firscomp.component.css']
})
export class FirscompComponent implements OnInit {

  whatsthis="This is First Component";
  newVariable:DemoClass={
    id:1,name:"Vishwa from DemoClass"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
