import { Component, OnInit } from '@angular/core';
import { TypeScriptQuestions } from 'src/assets/questions/index';
import { IQuestionSection } from 'src/app/models/questions';
import { StoreService } from 'src/app/services/store/store.service';

const STORE_KEY = 'typescript';

@Component({
  selector: 'itw-typescript',
  templateUrl: './typescript.page.html',
  styleUrls: ['./typescript.page.scss'],
})
export class TypeScriptPage implements OnInit {
  public storeKey: string = STORE_KEY;
  public sections: IQuestionSection[] = TypeScriptQuestions;
  public comments: string = '';
  public isLoading: boolean = false;

  constructor(
    private store: StoreService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    const storedData = await this.store.get(STORE_KEY);
    this.sections = storedData?.data || TypeScriptQuestions;
    this.comments = storedData?.comments || '';
    this.isLoading = false;
  }
}
