import { Directive,  ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyleDirective]'
})
export class CustomStyleDirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color='red'
  }

}
