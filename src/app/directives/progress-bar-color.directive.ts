import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProgressBarColor]'
})
export class ProgressBarColorDirective implements OnChanges {
  static counter = 0;

  @Input() appProgressBarColor!: string;
  styleEl: HTMLStyleElement = document.createElement('style');
  nativeEl: HTMLElement;
  //generate unique attribule which we will use to minimise the scope of our dynamic style 
  uniqueAttr = `app-progress-bar-color-${ProgressBarColorDirective.counter++}`;

  constructor(private el: ElementRef) {
    this.nativeEl = this.el.nativeElement;
  }

  ngOnChanges(): void {
    this.updateColor();
  }

  updateColor(): void {
    // update dynamic style with the uniqueAttr
    this.styleEl.innerHTML = `.mat-progress-bar-fill::after{ background-color: ${this.appProgressBarColor} !important;}`;
    this.nativeEl.appendChild(this.styleEl);
    
  }

}