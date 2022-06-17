import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from 'src/app/services/store/store.service';
import { IQuestionSection } from 'src/app/models/questions';
import { ICandidate, makeCandidate } from 'src/app/models/candidate';

const ACTIVE_TECHNOLOGIES_KEY = 'techs';
const CANDIDATE_KEY = 'candidate';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public candidate = makeCandidate({});
  private _candidate = new BehaviorSubject<ICandidate>(null);
  public candidate$ = this._candidate.asObservable();

  public activeTechnologies: string[] = [];
  private _activeTechnologies = new BehaviorSubject<string[]>([]);
  public activeTechnologies$ = this._activeTechnologies.asObservable();

  public indexedData = {};
  public indexedComments = {};
  private _indexedData = new BehaviorSubject<{}>({});
  public indexedData$ = this._indexedData.asObservable();

  public indexedResume = {};
  public canvasImage = {};

  constructor(
    private store: StoreService,
  ) {
    this.init();
  }

  async init() {
    this.activeTechnologies = await this.store.get(ACTIVE_TECHNOLOGIES_KEY) || [];
  }

  saveCandidate(value: ICandidate) {
    this.candidate = value;
    this._candidate.next(value);
    this.store.set(CANDIDATE_KEY, value);
  }

  saveData(tech: string, data: IQuestionSection[], comments: string) {
    const hasAtLeastOneAnswers = this.hasAtLeastOneAnswers(data);
    this.setIndexedData(tech, data, comments);
    this.setActiveTechnologies(tech, hasAtLeastOneAnswers);

    if (hasAtLeastOneAnswers) {
      this.store.set(tech, { data, comments });
    } else {
      this.store.remove(tech);
    }
  }

  setActiveTechnologies(tech: string, hasAtLeastOneAnswers?: boolean) {
    let newTechs = [];

    if (hasAtLeastOneAnswers) {
      newTechs = [...this.activeTechnologies, tech];
    } else {
      newTechs = this.activeTechnologies.filter(_tech => _tech !== tech);
    }
    this.activeTechnologies = [...new Set(newTechs)];
    this._activeTechnologies.next(this.activeTechnologies);
    this.store.set(ACTIVE_TECHNOLOGIES_KEY, this.activeTechnologies);
  }

  setIndexedData(tech: string, data: IQuestionSection[], comments: string) {
    this.indexedComments[tech] = comments;
    this.indexedData[tech] = data;
    this._indexedData.next(this.indexedData);
  }

  setIndexedResume(tech: string, resume: any) {
    this.indexedResume[tech] = resume;
  }

  setCanvasImageFor(tech: string, base64Image: string) {
    this.canvasImage[tech] = base64Image;
  }

  hasAtLeastOneAnswers(data) {
    return !!data.map(section => section.questions
      .filter(q => q.points)
      .map(q => q.points)).flat().length;
  }
}
