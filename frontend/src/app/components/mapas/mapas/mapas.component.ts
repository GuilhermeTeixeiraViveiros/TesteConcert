import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.sass']
})
export class MapasComponent{
  title = 'Localização da Empresa';
  zoom = 15;
  raio = 150;
  lat = -19.937719;
  lng = -43.937732;
  latMarker = -19.937719;
  lngMarker = -43.937732;
  latCircle: number;
  lngCircle: number;
  circleColor = "#ffcccc"
  circleOpacity = 0
  goToMcDonalds(){
    this.latMarker = -19.9375969;
    this.lngMarker = -43.9353177;
    this.latCircle = -19.9375969;
    this.lngCircle = -43.9353177;
  }
  goToConcert(){
    this.latMarker = -19.937719;
    this.lngMarker = -43.937732;
    this.latCircle = -19.937719
    this.lngCircle = -43.937732
  }
}