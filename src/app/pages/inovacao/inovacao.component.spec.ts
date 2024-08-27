import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovacaoComponent } from './inovacao.component';

describe('InovacaoComponent', () => {
  let component: InovacaoComponent;
  let fixture: ComponentFixture<InovacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InovacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InovacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
