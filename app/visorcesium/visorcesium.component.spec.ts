import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorcesiumComponent } from './visorcesium.component';

describe('VisorcesiumComponent', () => {
  let component: VisorcesiumComponent;
  let fixture: ComponentFixture<VisorcesiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisorcesiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorcesiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
