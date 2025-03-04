import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-eso',
    templateUrl: './eso.component.html',
    styleUrls: ['./eso.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class EsoComponent  implements OnInit {

  points = 0;

  nombre = "";

  isModalOpen = false;

  currentQuestionIndex = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.comprobarNombre();
    this.currentQuestionIndex = 0;
  }

  comprobarNombre() {
    this.isModalOpen = this.nombre == "";
  }

  questions = [
    'San Ignacio nació en el siglo XVI',
    'Su nombre de nacimiento era Íñigo López de Loyola',
    'La herida que sufrió en la batalla de Pamplona no cambió su vida',
    'Durante su conversión, tuvo visiones de la Virgen María y de Cristo',
    'San Ignacio estudió en la Universidad de París',
    'El papa aprobó la Compañía de Jesús en 1540',
    'San Ignacio escribió la "Regla de San Benito"',
    'Los jesuitas fueron fundados con la misión de la educación y evangelización',
    'San Ignacio murió en Roma en el año 1556',
    'Fue canonizado santo en 1622, el mismo año que San Francisco Javier',
  ];

  correctAnswers = [
    false, true, false, true, true, true, false, true, true, true
  ];

  images = [
    'assets/Ciudad con puerto.jpg',
    'assets/san-ignacio-de-loyola2.jpg',
    'assets/20181011_132229.jpg',
    'assets/aparicion-resucitado-03.jpg',
    'assets/universite-de-paris-banner.jpg',
    'assets/fuente-propia-articulo-jesuitas.webp',
    'assets/regla-de-san-benito-iv_projectfull.jpg',
    'assets/_129846364_gettyimages-89173757.jpg',
    'assets/cq5dam.thumbnail.cropped.1000.563.jpeg',
    'assets/san-francisco-javier.jpeg',
  ];

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  get currentImage() {
    return this.images[this.currentQuestionIndex];
  }

  answerQuestion(answer: boolean) {
    if (answer === this.correctAnswers[this.currentQuestionIndex]) {
      this.points++;
      const toast = document.getElementById("toastVerdadero") as any;
      toast.present();
    } else {
      const toast = document.getElementById("toastFallo") as any;
      toast.present();
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log('No hay más preguntas');
      this.router.navigate(["/resultado", this.nombre, this.points])
    }
  }
}
