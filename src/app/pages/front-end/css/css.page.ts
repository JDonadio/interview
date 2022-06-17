import { Component, OnInit } from '@angular/core';
import { CssQuestions } from 'src/assets/questions/index';
import { IQuestionSection } from 'src/app/models/questions';
import { StoreService } from 'src/app/services/store/store.service';

const STORE_KEY = 'css';

@Component({
  selector: 'itw-css',
  templateUrl: './css.page.html',
  styleUrls: ['./css.page.scss'],
})
export class CssPage implements OnInit {
  public storeKey: string = STORE_KEY;
  public sections: IQuestionSection[] = CssQuestions;
  public comments: string = '';
  public isLoading: boolean = false;

  constructor(
    private store: StoreService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    const storedData = await this.store.get(STORE_KEY);
    this.sections = storedData?.data || CssQuestions;
    this.comments = storedData?.comments || '';
    this.isLoading = false;
  }
}
