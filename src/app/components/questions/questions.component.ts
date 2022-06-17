import { Component, Input, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';
import { IQuestionSection } from 'src/app/models/questions';
import debounce from 'lodash/debounce';

@Component({
  selector: 'itw-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  @Input() storeKey: string = null;
  @Input() comments: string = '';
  @Input() sections: IQuestionSection[] = [];

  public expanded = {};

  constructor(
    private state: StateService,
  ) { }

  ngOnInit() {
    this.sections.forEach(section => {
      this.expanded[section.title] = this.hasAtLeastOneAnswers(section);
    })
  }

  save() {
    debounce(() => {
      this.state.saveData(this.storeKey, this.sections, this.comments);
    }, 200)();
  }

  hasAtLeastOneAnswers(section) {
    return !!section.questions.filter(q => q.points).length;
  }
}
