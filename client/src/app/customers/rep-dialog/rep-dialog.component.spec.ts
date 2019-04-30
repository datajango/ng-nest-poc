import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepDialogComponent } from './rep-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdcModule } from 'src/app/mdc/mdc.module';
import { FormsModule } from '@angular/forms';

describe('RepDialogComponent', () => {
  let component: RepDialogComponent;
  let fixture: ComponentFixture<RepDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepDialogComponent ],
      imports: [ 
        FormsModule,               
        MdcModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
