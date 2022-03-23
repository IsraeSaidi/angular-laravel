import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrierProductComponent } from './trier-product.component';

describe('TrierProductComponent', () => {
  let component: TrierProductComponent;
  let fixture: ComponentFixture<TrierProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrierProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrierProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
