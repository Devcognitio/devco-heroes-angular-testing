import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from './hero';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';

// Devco Test de un cliente http
describe('HeroService', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let messageServiceSpy: jasmine.SpyObj<MessageService>;
    let heroService: HeroService;

    function asyncData(data: any){
        const myObservables = Observable.create((observer: Observer<Hero>) => {
            observer.next(data); 
            observer.complete();            
          });
        return myObservables;
    }

    function asyncError(error: HttpErrorResponse){
        return throwError(error);
    }

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        messageServiceSpy = jasmine.createSpyObj('MessageService', ['add']);
        heroService = new HeroService(<any> httpClientSpy, messageServiceSpy);
    });

    it('Debe retornar los heroes esperados (HttpClient called once)', () => {
        const expectedHeroes: Hero[] =
            [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

        httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

        heroService.getHeroes().subscribe(
            heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('debe restornar un error cuando el servidor retorna un 404', () => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errorResponse));

        heroService.getHeroes().subscribe(
            heroes => {
                // TODO: Revisar el mensaje de error en este test
                //fail('expected an error, not heroes')
                expect(heroes.length).toEqual(0);
            },
            error  => expect(error.message).toContain('test 404 error')
        );
    });
});