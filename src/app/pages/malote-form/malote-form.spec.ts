import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaloteForm } from './malote-form';

describe('MaloteForm', () => {
  let component: MaloteForm;
  let fixture: ComponentFixture<MaloteForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaloteForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaloteForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
