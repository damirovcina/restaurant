import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfooddetailsComponent } from './allfooddetails.component';

describe('AllfooddetailsComponent', () => {
  let component: AllfooddetailsComponent;
  let fixture: ComponentFixture<AllfooddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfooddetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfooddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
