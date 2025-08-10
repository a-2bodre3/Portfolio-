import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerThemeComponent } from './hacker-theme.component';

describe('HackerThemeComponent', () => {
  let component: HackerThemeComponent;
  let fixture: ComponentFixture<HackerThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HackerThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
