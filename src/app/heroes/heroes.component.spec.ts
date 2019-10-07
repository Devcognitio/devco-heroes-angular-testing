import { HeroesComponent } from "./heroes.component";
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, Observer } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// DEVCO Componente usando el DOM
// Componente con rutas 
describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let heroService: HeroService;
    let addHeroSpy;
    let getHeroesSpy;
    const heroStub: Hero = {id:1, name: 'A'};
    let heroServicesSpy;

    function asyncData(data: any){
        const myObservables = Observable.create((observer: Observer<any>) => {
            observer.next(data); 
            observer.complete();            
          });
        return myObservables;
    }

    beforeEach(async(() => {
        heroServicesSpy = jasmine.createSpyObj('HeroService', ['getHeroes', 'addHero']);
        addHeroSpy = heroServicesSpy.addHero.and.returnValue( asyncData(heroStub) );
        getHeroesSpy = heroServicesSpy.getHeroes.and.returnValue( asyncData([heroStub]) );

        TestBed.configureTestingModule({
            imports:      [ FormsModule,
                RouterTestingModule.withRoutes([]), ],
            declarations: [ HeroesComponent ],
            providers: [
              { provide: HeroService,    useValue: heroServicesSpy }
            ]
        })
        .compileComponents() // CompileComponents es async
        .then(() => {
            fixture = TestBed.createComponent(HeroesComponent);
            component = fixture.componentInstance;

            // HeroService actually injected into the component
            // cambiar heroServicesStub no afecta al inyectado, 
            // por lo tanto necesitaremos el inyectado para cambios futuros
            heroService = TestBed.get(HeroService);

            // iniciamos la lista de heroes
            component.heroes = [heroStub];
            fixture.detectChanges();
        });

        
    }));

    it('should create', () => {
        expect(component.heroes.length).toBeGreaterThan(0);
        fixture.detectChanges();
        expect(getHeroesSpy.calls.count()).toBe(1, 'one call for getHeroes on HeroService');
        expect(component).toBeDefined();
        expect(component.heroes.length).toBeGreaterThan(0);
    });

    it('debe tener un <h2> conteniendo la palabra "My Heroes"', () =>{
        let elementoh2 = fixture.nativeElement.querySelector("h2");
        fixture.detectChanges();
        expect(elementoh2.textContent).toContain('My Heroes');
    });

    it('debe agregar un heroe en la pantalla', () =>{
        const input = fixture.nativeElement.querySelector("input");
        const addButton = fixture.nativeElement.querySelectorAll("button")[0];

        input.value = 'Devco Hero';

        let cle = document.createEvent("MouseEvent");
        cle.initEvent("click", true, true);
        addButton.dispatchEvent(cle);

        fixture.detectChanges();

        expect(addHeroSpy.calls.count()).toBe(1, 'one call for addHero on HeroService');
    });

});