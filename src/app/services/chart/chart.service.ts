import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IChartOpts } from 'src/app/models/chart-opts';
import { StateService } from 'src/app/services/state/state.service';

const LABELS = ['All Questions', 'All Answers', 'Initial', 'Intermediate', 'Advanced'];
const backgroundColor = [
  'rgb(211 211 211)',
  'rgb(111 83 139)',
  'rgb(155 198 236)',
  'rgb(148 182 124)',
  'rgb(220 106 94)',
];
const borderColor = [
  'rgb(119 119 119)',
  'rgb(81 83 139)',
  'rgb(85 108 129)',
  'rgb(88 107 74)',
  'rgb(120 56 49)',
];
const horizontalLine = {
  id: 'horizontalLine',
  beforeDraw(chart, args, options) {
    const { ctx, chartArea: { top, right, bottom, left, width, height }, scales: { x, y }} = chart;
    ctx.save();
    ctx.strokeStyle = options.lineColor;
    ctx.strokeRect(left, chart.getDatasetMeta(0).data[0].y, width, .1);
    ctx.restore();
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(
    private state: StateService,
  ) {
    Chart.register(...registerables);
  }

  createChart(opts: IChartOpts) {
    const chart = new Chart(opts.ctx, {
      type: opts.type,
      data: {
        labels: LABELS,
        datasets: [{
          fill: 'stack',
          label: opts.id.toUpperCase(),
          data: opts.data,
          borderColor,
          backgroundColor,
          borderRadius: 2,
          borderWidth: 2,
          tension: .5
        }]
      },
      options: {
        animation: {
          onComplete: () => {
            setTimeout(() => {
              this.state.setCanvasImageFor(opts.id, chart.toBase64Image());
            }, 100);
          }
        }
      },
      plugins: [horizontalLine]
    });

    return chart;
  }

  generateDataSet(data, labels) {
    const dataset = data.map((val, i) => {
      return {
        label: labels[i],
        data: val,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: backgroundColor[i],
        borderColor: borderColor[i],
      }
    })

    return dataset;
  }
}
