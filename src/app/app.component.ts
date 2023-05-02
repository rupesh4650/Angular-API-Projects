import { Component } from '@angular/core';
import { DatabaseService } from './service/database.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'APIProjects';
  hlo:any;
  constructor(private hi:DatabaseService){}
  ngOnInit():void
  {
    this.hi.data().subscribe(datas=>{
      this.hlo=datas;
    })
  }
}
