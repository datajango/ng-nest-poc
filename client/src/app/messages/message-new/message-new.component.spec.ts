import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageNewComponent } from './message-new.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcModule } from 'src/app/mdc/mdc.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MessageNewComponent', () => {
  let component: MessageNewComponent;
  let fixture: ComponentFixture<MessageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageNewComponent ],
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
    fixture = TestBed.createComponent(MessageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
