import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    var config = {
      apiKey: "AIzaSyBaGL6DxAdvoWI8kePwVWbWoOvPjtP_CWk",
      authDomain: "ng-recipe-book-c421a.firebaseapp.com"
    };
    firebase.initializeApp(config);
  }
}
