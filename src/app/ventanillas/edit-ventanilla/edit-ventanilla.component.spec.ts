import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVentanillaComponent } from './edit-ventanilla.component';

describe('EditVentanillaComponent', () => {
  let component: EditVentanillaComponent;
  let fixture: ComponentFixture<EditVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVentanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
