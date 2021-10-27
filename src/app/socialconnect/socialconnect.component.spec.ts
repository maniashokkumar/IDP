import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialconnectComponent } from './socialconnect.component';

describe('SocialconnectComponent', () => {
  let component: SocialconnectComponent;
  let fixture: ComponentFixture<SocialconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
