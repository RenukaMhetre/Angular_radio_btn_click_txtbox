import { Component } from "@angular/core";

@Component({
    selector:'two',
    templateUrl:'a.html'
})
export class TwoWay{
name=null;
email=null;
pass=null;
city=null;
cntry=null;
//addr=null;
//this.name
selectedLink: string=null;
setradio(e: string): void   
  {  
  
        this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
  }  
  
        return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
    }  
}