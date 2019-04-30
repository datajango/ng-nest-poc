import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNewComponent } from './order-new.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcModule } from 'src/app/mdc/mdc.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('OrderNewComponent', () => {
  let component: OrderNewComponent;
  let fixture: ComponentFixture<OrderNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNewComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MdcModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
