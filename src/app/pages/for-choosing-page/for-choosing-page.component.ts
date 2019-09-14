import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-for-choosing-page',
  templateUrl: './for-choosing-page.component.html',
  styleUrls: ['./for-choosing-page.component.sass']
})
export class ForChoosingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectCathegory(event: any) {
    const result = event.target.value;
    console.log(result)
  }
}
