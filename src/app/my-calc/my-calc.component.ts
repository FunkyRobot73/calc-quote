import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css']
})
export class MyCalcComponent implements OnInit{

  inputStr: any;

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    })
  }
}
