import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVentanillaComponent } from './create-ventanilla.component';

describe('CreateVentanillaComponent', () => {
  let component: CreateVentanillaComponent;
  let fixture: ComponentFixture<CreateVentanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVentanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVentanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
