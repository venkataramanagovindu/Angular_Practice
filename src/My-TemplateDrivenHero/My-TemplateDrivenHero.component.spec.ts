/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTemplateDrivenHeroComponent } from './My-TemplateDrivenHero.component';

describe('MyTemplateDrivenHeroComponent', () => {
  let component: MyTemplateDrivenHeroComponent;
  let fixture: ComponentFixture<MyTemplateDrivenHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTemplateDrivenHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTemplateDrivenHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
