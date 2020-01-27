import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasenavComponent } from './basenav.component';

describe('BasenavComponent', () => {
  let component: BasenavComponent;
  let fixture: ComponentFixture<BasenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
