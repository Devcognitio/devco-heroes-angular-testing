import { CambioLuzComponent } from './cambio-luz.component';

//DEVCO Componentes sencillos
describe('LightswitchComp', () => {
  it('#clicked() debe poner #isOn', () => {
    const comp = new CambioLuzComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() debe poner el #message con "is on"', () => {
    const comp = new CambioLuzComponent();
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});
