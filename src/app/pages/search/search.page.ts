import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albumes: any[]= [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAlbumes().subscribe(albumes=> {
      console.log(albumes);
      this.albumes=albumes;
    });
  }

  onSearchChange(event){
    console.log(event);
  }
}
