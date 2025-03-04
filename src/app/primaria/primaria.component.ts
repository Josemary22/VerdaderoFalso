import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import { saveAs } from 'file-saver';
import {Router} from "@angular/router";

@Component({
    selector: 'app-primaria',
    templateUrl: './primaria.component.html',
    styleUrls: ['./primaria.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class PrimariaComponent  implements OnInit {

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
    'assets/Loyola2.jpg',
    'assets/10-6802.jpg',
    'assets/2492e4c3-ec9f-4168-a0e8-3d4e827d89dd.jpeg',
    'assets/20181011_132229.jpg',
    'assets/regla-de-san-benito-iv_projectfull.jpg',
    'assets/western-wall-temple-mount.jpg',
    'assets/cq5dam.thumbnail.cropped.1500.844.jpeg',
    'assets/saint-ignatius.jpg',
    'assets/csm_2023_07_31__4c19546b8c.jpg',
    'assets/09454f69d5b9c5283e3ac61c10c7ccc3_XL.jpg'
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
