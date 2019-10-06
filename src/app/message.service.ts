import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  getFirstValue(): string{
    return this.messages[0];
  }

  clear() {
    this.messages = [];
  }

  getObservableValue(){
    const myObservables = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('observable value')
      }, 1000);

      setTimeout(() => {
        observer.complete();
      }, 2000);
    });
    return myObservables;

  }

  getPromiseValue():Promise<string>{
    let promise = new Promise<string>((resolve, reject) => {
      resolve('promise value');     
    });
    return promise;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/