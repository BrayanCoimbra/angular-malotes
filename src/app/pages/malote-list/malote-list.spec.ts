import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloteListComponent } from './malote-list';

describe('MaloteList', () => {
  let component: MaloteListComponent;
  let fixture: ComponentFixture<MaloteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaloteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloteListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
