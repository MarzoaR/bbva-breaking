import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastEpisodeComponent } from './last-episode.component';

describe('LastEpisodeComponent', () => {
  let component: LastEpisodeComponent;
  let fixture: ComponentFixture<LastEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
