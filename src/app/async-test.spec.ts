import { fakeAsync, tick } from "@angular/core/testing";

// DEVCO Usando fakeAsync para restear asincronos
describe('AsyncTest', () => {

    it('debería ejecutar la devolución de llamada de tiempo de espera con retraso después del tick con millis', fakeAsync(() => {
        let called = false;
        setTimeout(() => { called = true; }, 100);
        tick(100);
        expect(called).toBe(true);
    }));

    it('simulación de paso del tiempo con fakeAsync', fakeAsync(() => {
        const start = Date.now();
        tick(100);
        const end = Date.now();
        expect(end - start).toBe(100);
    }));

});