import { TestBed } from '@angular/core/testing';

import { WrapperMessageService } from './wrapper-message.service';
import { MessageService } from './message.service';
import { stringify } from 'querystring';

describe('WrapperMessageService', () => {
  let service: WrapperMessageService;

  // No recomendado
  xit('#getValue debe retornar el verdadero mensaje', () => {
    service = new WrapperMessageService(new MessageService());
    expect(service.getValue()).toBe('real value');
  });

  // Servicio simulado
  /*xit('#getValue debe retornar el mensaje, usando fake service', () => {
    service = new WrapperMessageService(new FakeMessageService());
    expect(service.getValue()).toBe('faked service value');
  });*/

  it('#getValue debe retornar el mensaje, usando fake object ', () => {
    const fake: unknown =  {
      getFirstValue: () => 'fake value'
    };
    service = new WrapperMessageService(fake as MessageService);
    expect(service.getValue()).toBe('fake value');
  });

  it('#getValue debe retornar el mensaje, usando spy', () => {
    const messageServiceSpy =
      jasmine.createSpyObj('MessageService', ['getFirstValue']);

    const stubValue = 'stub value';
    messageServiceSpy.getFirstValue.and.returnValue(stubValue);

    service = new WrapperMessageService(messageServiceSpy);

    expect(service.getValue())
      .toBe(stubValue, 'service returned stub value');
    expect(messageServiceSpy.getFirstValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(messageServiceSpy.getFirstValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});
