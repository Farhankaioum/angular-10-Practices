import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Few custom unit testing

  // testing property
  it("testing title", () => {
    expect(component.conponentName).toBe("test");
  })
  // testing method
  it("testing function", ()=> {
    expect(component.sum(40, 60)).toBe(100)
  })

  // testing html specific element using class name
  it("testing html element", () => {
    const data = fixture.nativeElement;
    expect(data.querySelector(".some").textContext).toContain("user")
  })

});
