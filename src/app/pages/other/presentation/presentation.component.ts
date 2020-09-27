import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef){

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yellow';
 }
}
