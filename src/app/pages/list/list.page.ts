import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(private _dataService: DataService) { 

  }

  ngOnInit() {

    //this._dataService.getusuarios().subscribe(console.log);
    this.usuarios=this._dataService.getusuarios();
  }

  favorite(usuario){
    console.log('favorite', usuario);
    this.ionList.closeSlidingItems();
  }

  share(usuario){
    console.log('share', usuario);
    this.ionList.closeSlidingItems();
  }

  delete(usuario){
    console.log('delete', usuario.name);
    this.ionList.closeSlidingItems();
  }

}
