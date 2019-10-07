import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
// Para activar el autoDetectChanges
//import { ComponentFixtureAutoDetect } from '@angular/core/testing';

// DEVCO Componente usando el DOM
describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1:        HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
      // Para activar el autoDetectChanges
      /*,
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]*/
    })
    .compileComponents(); // Importante cuando el componente usa el template y css en archivos diferentes
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia tener el titulo "Test Tour of Heroes" en el <h1>',() => {
    fixture.detectChanges();

    expect(h1.textContent).toContain(component.title);
  });

  it('deberia mostrar un titulo diferente de prueba si se cambia', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    expect(h1.textContent).toContain('Test Title');
  });
});
