import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatchPage } from './single-match.page';

describe('SingleMatchPage', () => {
  let component: SingleMatchPage;
  let fixture: ComponentFixture<SingleMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMatchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
