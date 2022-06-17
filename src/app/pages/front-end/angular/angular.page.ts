import { Component, OnInit } from '@angular/core';
import { AngularQuestions } from 'src/assets/questions/index';
import { IQuestionSection } from 'src/app/models/questions';
import { StoreService } from 'src/app/services/store/store.service';

const STORE_KEY = 'angular';

@Component({
  selector: 'itw-angular',
  templateUrl: './angular.page.html',
  styleUrls: ['./angular.page.scss'],
})
export class AngularPage implements OnInit {
  public storeKey: string = STORE_KEY;
  public sections: IQuestionSection[] = AngularQuestions;
  public comments: string = '';
  public isLoading: boolean = false;

  constructor(
    private store: StoreService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    const storedData = await this.store.get(STORE_KEY);
    this.sections = storedData?.data || AngularQuestions;
    this.comments = storedData?.comments || '';
    this.isLoading = false;
  }
}
