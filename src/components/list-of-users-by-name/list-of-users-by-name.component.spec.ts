import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfUsersByNameComponent } from './list-of-users-by-name.component';

describe('ListOfUsersByNameComponent', () => {
  let component: ListOfUsersByNameComponent;
  let fixture: ComponentFixture<ListOfUsersByNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListOfUsersByNameComponent]
    });
    fixture = TestBed.createComponent(ListOfUsersByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
