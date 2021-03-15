import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private menuControler:MenuController,
              private _dataService: DataService) 
  {

  }

  ngOnInit() {
    this.componentes=this._dataService.getMenuOpts();
  }

  mostrarMenu(){
    this.menuControler.open('first');
  }
}
