import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebIdeComponent } from './web-ide.component';

describe('WebIdeComponent', () => {
  let component: WebIdeComponent;
  let fixture: ComponentFixture<WebIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
