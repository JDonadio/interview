import { Component, OnInit } from '@angular/core';
import { GitQuestions } from 'src/assets/questions/index';
import { IQuestionSection } from 'src/app/models/questions';
import { StoreService } from 'src/app/services/store/store.service';

const STORE_KEY = 'git';

@Component({
  selector: 'itw-git',
  templateUrl: './git.page.html',
  styleUrls: ['./git.page.scss'],
})
export class GitPage implements OnInit {
  public storeKey: string = STORE_KEY;
  public sections: IQuestionSection[] = GitQuestions;
  public comments: string = '';
  public isLoading: boolean = false;

  constructor(
    private store: StoreService,
  ) { }

  async ngOnInit() {
    this.isLoading = true;
    const storedData = await this.store.get(STORE_KEY);
    this.sections = storedData?.data || GitQuestions;
    this.comments = storedData?.comments || '';
    this.isLoading = false;
  }
}
