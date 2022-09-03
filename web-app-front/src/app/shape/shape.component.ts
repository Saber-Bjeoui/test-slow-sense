import { AfterContentChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EShapeType } from '../shape-type.enum';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit, AfterViewInit {

  @Input() shapeType = EShapeType.TEXT
  @Input() height =  0;
  @Input() width = 0;
  @Input() positionX = 0;
  @Input() positionY = 0;
  @Input() text = '';
  @Input() order = 0

  @ViewChild('shape') shape: ElementRef = new ElementRef('');

  EShapeType = EShapeType

  constructor(private elRef:ElementRef) { }


  ngOnInit(): void { }

  ngAfterViewInit() {

    //this.elRef.nativeElement.style.transform = `translateX(${this.positionX}px)`;

    if(this.shapeType === EShapeType.TEXT) {
      console.log(this.positionX, this.positionY)
      console.log(this.elRef)
      console.log({width: this.elRef.nativeElement.offsetWidth, height: this.elRef.nativeElement.offsetHeight})
      this.positionX = this.positionX - (this.elRef.nativeElement.offsetWidth / 2)
      this.positionY = this.positionY - (this.elRef.nativeElement.offsetHeight / 2)

      console.log(this.positionX, this.positionY)
     
    }

    this.elRef.nativeElement.style.left = this.positionX + 'px';
    this.elRef.nativeElement.style.top = this.positionY + 'px';

    this.elRef.nativeElement.style.zIndex = this.order;

    if(this.shapeType === EShapeType.CIRCLE) this.height = this.width

   

    this.shape.nativeElement.style.width = this.width + 'px';
    this.shape.nativeElement.style.height = this.height + 'px';

   

    this.shape.nativeElement.textContent = this.text
  }

  showPopup() {

  }

}
