import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
  <p> This is a warning, you are in danger!</p>
  `,

  styles:[`
    p{
      padding:15px;
      background-color:red;
      border:3px solid yellow;
    }
    `]
})

export class WarningAlertComponent {

}
