import { DashboardComponent } from "./dashboard.component";
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable, Observer } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// DEVCO Componentes con dependencias
describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let heroServiceSpy: jasmine.SpyObj<HeroService>;
    const heroesMock: Hero[] =
            [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

    beforeEach(() => {
        const myObservableHeroes = Observable.create((observer: Observer<Hero[]>) => {
            observer.next(heroesMock); 
            observer.complete();            
        });
        
        heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);  
        heroServiceSpy.getHeroes.and.returnValue(myObservableHeroes);

        component = new DashboardComponent(heroServiceSpy);
      });

    it('deberia iniciar el componente consultando los heroes', () => {
        component.ngOnInit();
        expect(component.heroes.length).toBeGreaterThan(0);
        expect(heroServiceSpy.getHeroes.calls.count())
      .toBe(1, 'spy method was called once');
    });
});