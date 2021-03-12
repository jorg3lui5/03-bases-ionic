import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  constructor(private _dataService: DataService) { 

  }

  ngOnInit() {

    //this._dataService.getusuarios().subscribe(console.log);
    this.usuarios=this._dataService.getusuarios();
  }



}
