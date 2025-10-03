import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStatusCellComponent } from './grid-status-cell.component';

describe('GridStatusCellComponent', () => {
  let component: GridStatusCellComponent;
  let fixture: ComponentFixture<GridStatusCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridStatusCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridStatusCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
