import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridRowActionsComponent } from './grid-row-actions.component';

describe('GridRowActionsComponent', () => {
  let component: GridRowActionsComponent;
  let fixture: ComponentFixture<GridRowActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridRowActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridRowActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
