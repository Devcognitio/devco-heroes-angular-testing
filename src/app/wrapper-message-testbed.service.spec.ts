import { TestBed } from '@angular/core/testing';

import { WrapperMessageService } from './wrapper-message.service';
import { MessageService } from './message.service';
import { stringify } from 'querystring';

describe('WrapperMessageService', () => {
  let service: WrapperMessageService;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MessageService', ['getFirstValue']);
  
    TestBed.configureTestingModule({
      providers: [
        WrapperMessageService,
        { provide: MessageService, useValue: spy }
      ]
    });
    // Inject both the service-to-test and its (spy) dependency
    service = TestBed.get(WrapperMessageService);
    messageServiceSpy = TestBed.get(MessageService);
  });

  it('#getValue debe retornar el mensaje, usando spy', () => {
    
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
