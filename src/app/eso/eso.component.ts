import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-eso',
    templateUrl: './eso.component.html',
    styleUrls: ['./eso.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class EsoComponent  implements OnInit {
  points = 0;
  constructor() { }

  ngOnInit() {}

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
    'assets/icon/imagenSanIgnacio.jpg',
    'assets/images/tierra-plana.jpg',
    'assets/images/sol-estrella.jpg'
  ];

  currentQuestionIndex = 0;

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  get currentImage() {
    return this.images[this.currentQuestionIndex];
  }

  answerQuestion(answer: boolean) {
    if (answer === this.correctAnswers[this.currentQuestionIndex]) {
      this.points++;
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      console.log('No hay más preguntas');
    }
  }
}
