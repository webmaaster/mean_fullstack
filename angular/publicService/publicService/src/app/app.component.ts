import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'publicService';

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
    console.log('In Init')
    this._httpService.getTasks()

  }
}
