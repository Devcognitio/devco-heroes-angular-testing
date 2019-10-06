import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WrapperMessageService {

  constructor(private messageService: MessageService) { }

  getValue():String { return this.messageService.getFirstValue(); }
}
