import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.scss']
})
export class SourcesComponent implements OnInit {

  @Input() sourcesList: any;
  @Input() setSource: any;

  ngOnInit() {
  }

}
