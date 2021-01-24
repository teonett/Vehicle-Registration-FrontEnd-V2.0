import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleditComponent } from './modeledit.component';

describe('ModeleditComponent', () => {
  let component: ModeleditComponent;
  let fixture: ComponentFixture<ModeleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
