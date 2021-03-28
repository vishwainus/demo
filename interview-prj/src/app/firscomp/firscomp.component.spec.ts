import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirscompComponent } from './firscomp.component';

describe('FirscompComponent', () => {
  let component: FirscompComponent;
  let fixture: ComponentFixture<FirscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirscompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
