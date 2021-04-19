import { CircleManager } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { LatLng } from './LatLng-model';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.sass']
})
export class MapasComponent{
  constructor(){}
  title = 'Mapa';
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
  PcaLiberdadeLat = -19.9319913;
  PcaLiberdadeLng = -43.9380937;
  MinasLat = -19.9356743;
  MinasLng = -43.940647;
  ConcertLat = -19.937719;
  ConcertLng = -43.937732;
  McLat = -19.9375969;
  McLng = -43.9353177;
  LifecenterLat = -19.9351079;
  LifecenterLng = -43.9246347;
  
  goToPcaLiberdade(){
    this.latMarker = this.PcaLiberdadeLat;
    this.lngMarker = this.PcaLiberdadeLng;
    this.latCircle = this.PcaLiberdadeLat;
    this.lngCircle = this.PcaLiberdadeLng;
  }

  goToMinasTenisClube(){
    this.latMarker = this.MinasLat;
    this.lngMarker = this.MinasLng;
    this.latCircle = this.MinasLat;
    this.lngCircle = this.MinasLng;
  }

  goToConcert(){
    this.latMarker = this.ConcertLat;
    this.lngMarker = this.ConcertLng;
    this.latCircle = this.ConcertLat;
    this.lngCircle = this.ConcertLng;
  }

  goToMcDonalds(){
    this.latMarker = this.McLat;
    this.lngMarker = this.McLng;
    this.latCircle = this.McLat;
    this.lngCircle = this.McLng;
  }

  goToLifeCenter(){
    this.latMarker = this.LifecenterLat;
    this.lngMarker = this.LifecenterLng;
    this.latCircle = this.LifecenterLat;
    this.lngCircle = this.LifecenterLng;
  }
 
  paths: LatLng[] = [
    {lat: this.PcaLiberdadeLat, lng:this.PcaLiberdadeLng},
    {lat: this.MinasLat, lng: this.MinasLng},
    { lat: this.ConcertLat, lng: this.ConcertLng },
    { lat: this.McLat, lng: this.McLng },
    { lat: this.LifecenterLat, lng:this.LifecenterLng},
    ]
}
