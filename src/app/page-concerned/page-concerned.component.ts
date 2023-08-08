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
  selectedAnswers: number[] = [];

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
      questionText: 'Combien de personnes avez-vous sous votre responsabilité ?',
      answers: [
        {text: 'Grand groupe / Plus de 1000 personnes', points : 1000},
        {text: 'Centaine de personne / Groupes de travail séparés', points : 100},
        {text: 'Groupe réduit / Quelques personnes', points : 1}
      ]
    },
    {
      questionText: 'Utilisez vous des données sensibles dans vos échanges numériques ?',
      answers: [
        {text: 'Echange obligatoire / Risque de piratage majeur', points : 1000},
        {text: 'Données sensibles mais à faible valeur économique', points : 100},
        {text: 'Uniquement des données déjà connues de tous', points : 1}
      ]
    }

  ]

  nextQuestion() {
    this.currentQuestionIndex++;
    console.log();
    this.selectedAnswer = null;
  }

  calculateResult() {
    for (let i = 0; i < this.selectedAnswers.length; i++) {
      this.totalPoints += this.selectedAnswers[i];
    }

    if (this.totalPoints > 900) {
      this.result = 'Vous semblez extrêmement exposé.e aux risques cyber par votre usage actuel du numérique.'
    } else if (this.totalPoints < 100) {
      this.result = 'Vous semblez relativement peu exposé.e, mais il serait toujours utile pour vos employé.e.s de recevoir une formation sur les risques cyber.'
    } else {
      this.result = 'Votre profil indique un risque moyen, contactez nous pour savoir quel serait la meilleure option propre à votre situation.'
    }

  }

}
