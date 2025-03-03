import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-primaria',
    templateUrl: './primaria.component.html',
    styleUrls: ['./primaria.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class PrimariaComponent  implements OnInit {
  points = 0;

  constructor() { }

  ngOnInit() {}

  questions = [
    'San Ignacio de Loyola nació en España',
    'Su nombre real era Ignacio desde su nacimiento',
    'Cuando era joven, San Ignacio era soldado',
    'Ignacio de Loyola nunca resultó herido en batalla',
    'Mientras se recuperaba de una herida, leyó libros sobre santos',
    'Después de su conversión, viajó a Jerusalén',
    'Fundó una comunidad llamada "Los Jesuitas"',
    'San Ignacio de Loyola escribió un libro llamado "Los Ejercicios Espirituales"',
    'Su lema era "Todo por la gloria de Dios"',
    'San Ignacio de Loyola nunca fue sacerdote'
  ];

  correctAnswers = [
    true, false, true, false, true, true, true, true, true, false
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
