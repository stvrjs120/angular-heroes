import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroesResultado:any = [];
  termino:string;

  constructor(private _activatedRouter: ActivatedRoute,
              private _heroesService: HeroesService,
              private _router: Router) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroesResultado = this._heroesService.buscarHeroes(this.termino);
    });
  }

  verHeroe(idx:number) {
    this._router.navigate(['/heroe', idx]);
  }

}
