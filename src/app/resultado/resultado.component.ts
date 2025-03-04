import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class ResultadoComponent  implements OnInit {

  nombre = "";
  puntos = 0;

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.puntos = params['puntos'];
    });
  }

  volverMenu() {
    this.router.navigate(['/home']);
  }

}
