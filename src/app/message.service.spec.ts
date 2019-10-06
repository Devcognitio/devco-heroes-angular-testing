import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { empty } from 'rxjs';

describe('MessageService', () => {
    let service: MessageService;
    beforeEach(() => { service = new MessageService(); });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#add deberia mantener el estado de un mensaje', () =>{
        service.add("Mensaje 1");
        expect(service.messages.length).toBe(1);
    });

    it('#add deberia mantener el estado de varios mensajes', () =>{
        service.add("Mensaje 1");
        service.add("Mensaje 2");
        expect(service.messages.length).toBe(2);
    });

    it('#clear deberia limpiar los mensajes', () =>{
        service.add("Mensaje 1");
        service.add("Mensaje 2");

        service.clear();

        expect(service.messages.length).toBe(0);        
    });

    // Async

    it('#getObservableValue deberia retornar un observable',
    (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue deberia retornar una promesa promise',
    (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
