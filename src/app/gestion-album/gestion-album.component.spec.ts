import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAlbumComponent } from './gestion-album.component';

describe('GestionAlbumComponent', () => {
  let component: GestionAlbumComponent;
  let fixture: ComponentFixture<GestionAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
