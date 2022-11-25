import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[matCalendarColor]'
})
export class MatCalendarColorDirective implements OnChanges {
  static counter = 0;

  @Input() matCalendarColor!: string;
  styleEl: HTMLStyleElement = document.createElement('style');
  nativeEl: HTMLElement;
  //generate unique attribule which we will use to minimise the scope of our dynamic style 

  constructor(private el: ElementRef) {
    this.nativeEl = this.el.nativeElement;
  }

  ngOnChanges(): void {
    this.updateColor();
  }

  updateColor(): void {
    // update dynamic style with the uniqueAttr
    this.styleEl.innerHTML = `.mat-calendar-body-selected{ background-color: ${this.matCalendarColor} !important;}`;
    this.nativeEl.appendChild(this.styleEl);
    
  }

}