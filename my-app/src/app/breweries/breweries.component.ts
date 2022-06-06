import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  brews: Array<any> = [];

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.myMethod();
    this._http.getBeer().subscribe(data => {
      this.brews = data as Array<Object>;
      console.log(this.brews);
    });
  }
}
