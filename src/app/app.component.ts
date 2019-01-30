import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Title }  from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public constructor(private titleService: Title ) { }


public setTitle( newTitle: string) {
  this.titleService.setTitle( newTitle );
}

}
