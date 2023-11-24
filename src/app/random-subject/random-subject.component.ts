import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ls-random-subject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-subject.component.html',
  styleUrl: './random-subject.component.css'
})
export class RandomSubjectComponent {
  subject: string = this.getRandomSubject();
  getRandomSubject(): string {
    let subjects: Array<string> = [
      'climate change','science','romance','comedy','history','geography','literature','education','dystopias','culture'
    ];
    let randomIndex = Math.floor(Math.random() * (subjects.length));
    this.subject = subjects[randomIndex];
    return this.subject;
  };
}
