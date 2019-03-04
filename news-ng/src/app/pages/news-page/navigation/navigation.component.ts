import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() setShowLocal: any;
  @Input() setFilterValue: any;
  @Input() isAuthorised: boolean;

  filterForm = new FormGroup({
    filterValue: new FormControl('')
  });

  ckeckboxForm = new FormGroup({
    check: new FormControl(false)
  });

  onCheckboxClick(){
    if(this.ckeckboxForm.value.check !== true) this.setShowLocal(true);
    else this.setShowLocal(false);
  }

  onFilterSubmit(){
    this.setFilterValue(this.filterForm.value.filterValue);
  }

  constructor() { }

  ngOnInit() {
  }

}
