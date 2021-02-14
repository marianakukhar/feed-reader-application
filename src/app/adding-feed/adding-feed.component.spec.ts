import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFeedComponent } from './adding-feed.component';

describe('AddingFeedComponent', () => {
  let component: AddingFeedComponent;
  let fixture: ComponentFixture<AddingFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
