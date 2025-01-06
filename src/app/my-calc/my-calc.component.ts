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

  buttonClick(buttonElement: any){
    let  buttonText = buttonElement.textContent;
        if (this.inputStr.controls.text.setValue != null){
            this.inputStr.controls.text.setValue(
      
            this.inputStr.controls.text.value
            + buttonText)
        } else {
          this.inputStr.controls.text.setValue(buttonText)
        }

  
  }

  clearDisplay() {
    this.inputStr.controls.text.setValue("")
  }

  calculate() {
    let result = eval(this.inputStr.controls.text.value)
    this.inputStr.controls.text.setValue(result)
  }

deleteLast(){
  let str = this.inputStr.component.text.value
  str = str.slice(0, -1)
  this.inputStr.controls.text.setValue(str)
}

}
