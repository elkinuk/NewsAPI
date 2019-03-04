import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceItemComponent } from './source-item.component';

describe('SourceItemComponent', () => {
  let component: SourceItemComponent;
  let fixture: ComponentFixture<SourceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
