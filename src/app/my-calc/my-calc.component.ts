import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-my-calc',
  templateUrl: './my-calc.component.html',
  styleUrls: ['./my-calc.component.css']
})
export class MyCalcComponent implements OnInit{

  inputStr: any;
  inputHour: any;
  inputProp: any;
  totalCost = 0;
  totalHours = 0;
  costPerHour = 150;
  totalExtra = [];

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text : new FormControl()
    })
    this.inputHour = new FormGroup({
      text : new FormControl()
    })
  }

  buttonClick(buttonElement: any){
    let  buttonText = buttonElement.textContent;
        if (this.inputStr.controls.text.value != null){
            this.inputStr.controls.text.setValue(
      
            this.inputStr.controls.text.value
            + buttonText)
        } else {
          this.inputStr.controls.text.setValue(buttonText)
        }

        
  
  }

  buttonHour(buttonElement: any){
    let  buttonText = buttonElement.textContent;
        // if (this.inputHour.controls.text.value != null){
        //     this.inputHour.controls.text.setValue(

        //     this.inputHour.controls.text.value
        //     + buttonText)
        // } else {
          
        // }
        this.inputHour.controls.text.setValue(buttonText)
        this.totalHours = buttonText;
        this.totalCost = this.costPerHour * this.totalHours
        console.log(typeof(this.totalCost))
      }

      buttonProp(buttonElement: any){
        let  buttonText = buttonElement.textContent;
            // if (this.inputHour.controls.text.value != null){
            //     this.inputHour.controls.text.setValue(
    
            //     this.inputHour.controls.text.value
            //     + buttonText)
            // } else {
              
            // }
            this.inputProp.controls.text.setValue(buttonText)
            this.totalExtra = buttonText;
            this.totalCost = this.costPerHour * this.totalHours
            console.log(typeof(this.totalCost))
          }
    

  clearDisplay() {
    this.inputStr.controls.text.setValue("")
  }

  clearHour() {
    this.inputHour.controls.text.setValue("")
    this.totalCost -= this.totalCost;
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
