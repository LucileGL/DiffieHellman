import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-concerned',
  templateUrl: './page-concerned.component.html',
  styleUrls: ['./page-concerned.component.css']
})
export class PageConcernedComponent {

  totalPoints = 0;
  result: string | null = null;
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null ;

  questions = [
    {
      questionText: 'A quelle fréquence utilisez vous les ordinateurs pour votre travail ?',
      answers: [
        {text: 'En permanence / Métier du numérique', points : 1000},
        {text: 'Fréquemment pour échanger', points : 100},
        {text: 'Pour des éléments tiers non-sensibles (emploi du temps, archives, inventaire)', points : 1}
      ]
    },
    {
      questionText: 'A quelle fréquence uttravail ?',
      answers: [
        {text: 'En permanence / Métier du numérique', points : 1000},
        {text: 'Fréquemment pour échanger', points : 100},
        {text: 'Pour des éléments tiers non-sensibles (emploi du temps, archives, inventaire)', points : 1}
      ]
    }

  ]

  nextQuestion() {
    this.currentQuestionIndex++;
    this.selectedAnswer = null;
  }

  submitAnswer() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
  this.nextQuestion();
  }

}
