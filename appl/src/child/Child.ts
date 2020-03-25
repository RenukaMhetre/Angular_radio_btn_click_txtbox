
import { Component } from "@angular/core";

  @Component({
    selector: 'my-app',
    templateUrl:'a1.html'
  })
  export class AppComponent {
    data="";
       onSaveName(name) {
        
        this.data=(name).value;
    console.log(name.value);
    }
  }
