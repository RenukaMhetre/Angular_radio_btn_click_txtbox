import { Component } from "@angular/core";

@Component({
    selector:'txtbtn',
    templateUrl:'Textbtn.html'
})

export class TextButtonComponent{
    show:boolean = false;
    buttonName:any = 'AddTextBox';
    toggle() {
        this.show = !this.show;
    
        // CHANGE THE NAME OF THE BUTTON.
        if(this.show)  
          this.buttonName = "HideTextBox";
        else
          this.buttonName = "AddTextBox";
      }
}