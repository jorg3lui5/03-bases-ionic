import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superheores: Observable<any>;
  opcionSeleccionada: string = '';

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.superheores = this._dataService.getHeroes();
  }

  segmentChanged( event ) {
    //console.log(event.detail.value);
    if(event.detail.value === 'todos'){
      return this.opcionSeleccionada='';
    }
    this.opcionSeleccionada=event.detail.value;
    
  }
}
