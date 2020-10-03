import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Utils } from 'src/app/classes/utils/utils';

@Component({
  selector: 'show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent  implements AfterViewInit {
  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    Utils.backgroundBlue(this.elementRef)
 }
}