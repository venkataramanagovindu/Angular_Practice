import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(ElRef : ElementRef) { 
    ElRef.nativeElement.style.background = 'red';
  }

}

