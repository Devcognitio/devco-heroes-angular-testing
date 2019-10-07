import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Hero } from '../hero';

// DEVCO Componente usando el DOM
// Componentes Inputs u Outputs
// Componente al que se llega por una ruta
describe('HeroDetailComponent', () => {
    /*let component: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;
    let heroService: HeroService;
    let elementoh2: HTMLElement;
    const heroStub: Hero = {id:1, name: 'A'};
    let getHeroSpy;
    let updateHeroSpy;
    
    function asyncData(data: Hero){
        const myObservables = Observable.create((observer: Observer<Hero>) => {
            observer.next(data); 
            observer.complete();            
          });
        return myObservables;
    }

    beforeEach(() => {
        const heroServicesSpy = jasmine.createSpyObj('HeroService', ['getHero', 'updateHero']);
        getHeroSpy = heroServicesSpy.getHero.and.returnValue( asyncData(heroStub) );
        updateHeroSpy = heroServicesSpy.getHero.and.returnValue( asyncData(heroStub) );

        TestBed.configureTestingModule({
            declarations: [ 
                HeroDetailComponent
            ],
            providers:    [ ActivatedRoute, 
                Location,
                {provide: HeroService, useValue: heroServicesSpy } ]
        });
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;

        // HeroService actually injected into the component
        // cambiar heroServicesStub no afecta al inyectado, 
        // por lo tanto necesitaremos el inyectado para cambios futuros
        heroService = TestBed.get(HeroService);
        elementoh2 = fixture.nativeElement.querySelector("h2");
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('debe tener un <h2> conteniendo la palabra "Details"', () =>{
        tick();
        fixture.detectChanges();

        expect(elementoh2.textContent).toContain('Details');
    });

    it ('debería usar el hero name en UPPERCASE', () => {
        component.hero = heroStub;
        tick();
        fixture.detectChanges();

        expect(elementoh2.textContent).toContain(heroStub[0].name.toUpperCase());
        expect(getHeroSpy.calls.any()).toBe(true, 'getHero called');
    });

    it('Probar #getHero que debe cambiar el heroe', fakeAsync(() => {

    }));*/
});