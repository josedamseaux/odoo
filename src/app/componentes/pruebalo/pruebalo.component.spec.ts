import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaloComponent } from './pruebalo.component';

describe('PruebaloComponent', () => {
  let component: PruebaloComponent;
  let fixture: ComponentFixture<PruebaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
