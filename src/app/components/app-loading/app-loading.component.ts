import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.scss']
})
export class AppLoadingComponent implements OnInit {

  @Input() text?:string;
  constructor() { }

  ngOnInit(): void {
  }

}
