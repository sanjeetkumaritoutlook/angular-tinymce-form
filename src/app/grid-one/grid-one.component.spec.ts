import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOneComponent } from './grid-one.component';

describe('GridOneComponent', () => {
  let component: GridOneComponent;
  let fixture: ComponentFixture<GridOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
