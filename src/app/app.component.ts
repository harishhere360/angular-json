import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angularapp';
  data: any[] = [];

  constructor(private dataService: DataService) {

    this.dataService.getJsonData().subscribe((res: any) => {
      this.data = res; // Assign fetched data to component variable
      
  
    });
  }
}
