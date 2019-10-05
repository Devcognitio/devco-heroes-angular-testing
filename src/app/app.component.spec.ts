import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    component = new AppComponent();    
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    expect(component.title).toEqual('Tour of Heroes');
  });
});
