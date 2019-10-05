import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';
import { empty } from 'rxjs';

describe('MessageService', () => {
    let service: MessageService;
    beforeEach(() => { service = new MessageService(); });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('deberia mantener el estado del mensaje', () =>{
        service.add("Mensaje 1");
        expect(service.messages.length).toBe(1);
    });

    it('deberia mantener el estado de varios mensajes', () =>{
        service.add("Mensaje 1");
        service.add("Mensaje 2");
        expect(service.messages.length).toBe(2);
    });

    it('deberia limpiar los mensajes', () =>{
        service.add("Mensaje 1");
        service.add("Mensaje 2");

        service.clear();

        expect(service.messages.length).toBe(0);        
    });
});
