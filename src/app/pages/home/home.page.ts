import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { StateService } from 'src/app/services/state/state.service';
import { ChartService } from 'src/app/services/chart/chart.service';
import { ReportService } from 'src/app/services/report/report.service';
import { IChartOpts, makeChartOpts } from 'src/app/models/chart-opts';
import { ICandidate, makeCandidate } from 'src/app/models/candidate';

const DEFAULT_CHART_TYPE = 'bar';
const ACTIVE_TECHNOLOGIES_KEY = 'techs';
const CANDIDATE_KEY = 'candidate';

@Component({
  selector: 'itw-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public candidate: ICandidate = makeCandidate({});
  public selectedChartType: { [key: string]: any } = {};
  public indexedCharts: { [key: string]: any } = {};
  public indexedData: { [key: string]: any } = {};
  public indexedDatasets: { [key: string]: any } = {};
  public indexedResume: { [key: string]: any } = {};
  public activeTechnologies: string[] = [];

  constructor(
    private store: StoreService,
    private state: StateService,
    private chartService: ChartService,
    private report: ReportService,
  ) {}

  async ngOnInit() {
    this.candidate = await this.store.get(CANDIDATE_KEY) || {};
    this.activeTechnologies = await this.store.get(ACTIVE_TECHNOLOGIES_KEY) || [];
    this.generateReport(this.activeTechnologies);

    this.activeTechnologies.forEach(async tech => {
      this.indexedData[tech] = await this.store.get(tech);
    });
  }

  exportReport() {
    this.report.exportReport(this.candidate, this.indexedData);
  }

  generateReport(techs: string[]) {
    setTimeout(() => {
      techs.forEach(tech => {
        this.selectedChartType[tech] = DEFAULT_CHART_TYPE;
        const opts: IChartOpts = this.prepareChartOpts(tech);
        this.indexedDatasets[tech] = opts.data;
        this.indexedCharts[tech] = this.chartService.createChart(opts);
      });
    }, 300);
  }

  reset() {
    this.store.clear();
  }

  saveCandidate() {
    this.state.saveCandidate(this.candidate);
  }

  updateChart(event, tech) {
    const type = event;
    const newOpts = this.prepareChartOpts(tech, type);
    this.indexedCharts[tech].destroy();
    this.indexedCharts[tech] = this.chartService.createChart(newOpts);
    this.indexedCharts[tech].update();
  }

  // MOVE INTO CHART SERVICE
  prepareChartOpts(tech, newType?) {
    const _data = this.indexedData[tech].data;
    const data = this.report.prepareDataset(tech, _data);

    const chartData = [
      data.questions.totalQuestions,
      data.answers.totalAnswers,
      data.answers.totalInitialAnswers,
      data.answers.totalIntermediateAnswers,
      data.answers.totalAdvancedAnswers,
    ];
    this.indexedResume[tech] = data.resume;

    const chartOpts = makeChartOpts({
      ctx: document.getElementById(tech),
      data: chartData,
      id: tech,
      type: this.selectedChartType[tech]
    });

    if (newType) {
      return { ...chartOpts, ...{ type: newType }};
    }

    return chartOpts;
  }
}
