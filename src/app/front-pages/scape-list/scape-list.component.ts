import { Component, OnInit } from '@angular/core';
import { ScapeRoom } from 'src/app/models/ScapeRoom';

@Component({
  selector: 'app-scape-list',
  templateUrl: './scape-list.component.html',
  styleUrls: ['./scape-list.component.scss']
})
export class ScapeListComponent implements OnInit {

  public scapes:ScapeRoom[]=[
    {
      id:1,
      name:'Dadoo Scape Room',
      rating:4,
      reviews:123,
      address:'C/Alberto Durán Tejera nº5, Rota, Cádiz',
      description:'Este es el mejor Scape que existe porque es de miedo jaja',
      image:'assets/imgs/scape.jpeg'
    },
    {
      id:2,
      name:'Una Vuelta de Tuerca',
      reviews:42,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/scape.jpeg'
    },
    {
      id:3,
      name:'JerezScapeRoom',
      reviews:54,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/scape.jpeg'
    },
    {
      id:4,
      name:'San Fernando Scape Room',
      reviews:54,
      address:'Avenida La Marina nº5, Jerez, Cádiz',
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore hic, excepturi ratione officiis doloremque blanditiis consequatur eaque dicta illum debitis corporis dolore ullam mollitia et saepe expedita molestias. Et, quis.',
      image:'assets/imgs/scape.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
