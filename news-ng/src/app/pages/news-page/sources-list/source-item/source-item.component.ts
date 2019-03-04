import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.scss']
})
export class SourceItemComponent implements OnInit {

  @Input() name: string;
  @Input() sourceData: any;

  @Output() setSource: EventEmitter<any> = new EventEmitter();

  public selectSource():void {
    this.setSource.emit({ id: this.sourceData.id, name: this.sourceData.name});
  }  

  ngOnInit() {}

}
