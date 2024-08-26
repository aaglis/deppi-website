import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensaoComponent } from './extensao.component';

describe('ExtensaoComponent', () => {
  let component: ExtensaoComponent;
  let fixture: ComponentFixture<ExtensaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
