import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-for-choosing-page',
  templateUrl: './for-choosing-page.component.html',
  styleUrls: ['./for-choosing-page.component.sass']
})
export class ForChoosingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectCathegory(event: any, pageName: string) {
    const result = event.target.value
    this.router.navigate([pageName])
    console.log(result)
  }
}
