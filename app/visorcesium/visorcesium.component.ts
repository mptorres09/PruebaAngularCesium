import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { AngularCesiumModule, ActionType, AcNotification, AcLayerComponent, AcMapComponent, ViewerConfiguration } from 'angular-cesium';

import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

declare var Cesium;
@Component({
  selector: 'app-visorcesium',
  templateUrl: './visorcesium.component.html',
  styleUrls: ['./visorcesium.component.css'],
  providers:[ViewerConfiguration]
})

export class VisorcesiumComponent implements OnInit,AfterViewInit {
  

  @ViewChild(AcMapComponent, {static: false}) map: AcMapComponent;

  entities = [
  	{
  		id: '0',
  		position: Cesium.Cartesian3.fromDegrees(-100.0,40.0,0),
  	},
  	{
  		id: '1',
  		position: Cesium.Cartesian3.fromDegrees(-120.0,40.0,0),
  	}
  ];

  boxDimensions = new Cesium.Cartesian3(800000,800000,800000);

  boxes$: Observable<AcNotification>;

  constructor(viewerConf: ViewerConfiguration) { 
    viewerConf.viewerOptions = {
      selectionIndicators: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: true,
      baseLayerPicker: false,
      animation: false,
      homeButton: false,
      geocoder: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE,
    };
  }

  ngOnInit(): void {
    this.boxes$ = from(this.entities).pipe(map(entity => ({id:entity.id, actionType: ActionType.ADD_UPDATE, entity: entity,})));
  }

  ngAfterViewInit(): void{
    const viewer = this.map.getCesiumService().getViewer();

    const layers = viewer.imageryLayers;
    const baseLayer = layers.get(0);
    layers.remove(baseLayer);
    layers.addImageryProvider(new Cesium.TileMapServiceImageryProvider({url: 'assets/cesium/Assets/Textures/NaturalEarthII'}));

  }
}


