import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmVetrinaComponent } from './film-vetrina.component';

describe('FilmVetrinaComponent', () => {
  let component: FilmVetrinaComponent;
  let fixture: ComponentFixture<FilmVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmVetrinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
