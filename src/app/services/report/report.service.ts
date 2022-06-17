import { Injectable } from '@angular/core';
import { ICandidate } from 'src/app/models/candidate';
import { StateService } from 'src/app/services/state/state.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const LEVELS = { ALL: 'all', INITIAL: 'initial', INTERMEDIATE: 'intermediate', ADVANCED: 'advanced' };

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private state: StateService,
  ) { }

  prepareReport(data) {
    const allAnsweredQuestions = data.map(section => section.questions
      .filter(q => q.level && q.points)).flat()

    const allAnsweredInitialQuestions = allAnsweredQuestions.filter(q => q.level === LEVELS.INITIAL);
    const allAnsweredIntermediateQuestions = allAnsweredQuestions.filter(q => q.level === LEVELS.INTERMEDIATE);
    const allAnsweredAdvancedQuestions = allAnsweredQuestions.filter(q => q.level === LEVELS.ADVANCED);

    return {
      allAnsweredQuestions,
      allAnsweredInitialQuestions,
      allAnsweredIntermediateQuestions,
      allAnsweredAdvancedQuestions,
    }
  }

  prepareDataset(tech, data) {
    const questions = this.getQuestions(data);
    const answers = this.getAnswers(data);
    const points = this.getPoints(data, answers);
    const resume = this.buildResumeObject(points, questions, answers);

    this.state.setIndexedResume(tech, resume);

    return {
      questions,
      answers,
      points,
      resume,
    }
  }

  getQuestions(data) {
    const totalQuestions = data.map(section => section.questions
      .filter(q => q.level).length)
      .reduce((acc, val) => acc + val);

    const totalInitialQuestions = data.map(section => section.questions
      .filter(q => q.level === LEVELS.INITIAL).length)
      .reduce((acc, val) => acc + val);

    const totalIntermediateQuestions = data.map(section => section.questions
      .filter(q => q.level === LEVELS.INTERMEDIATE).length)
      .reduce((acc, val) => acc + val);

    const totalAdvancedQuestions = data.map(section => section.questions
      .filter(q => q.level === LEVELS.ADVANCED).length)
      .reduce((acc, val) => acc + val);

    return {
      totalQuestions,
      totalInitialQuestions,
      totalIntermediateQuestions,
      totalAdvancedQuestions,
    };
  }

  getAnswers(data) {
    const totalAnswers = data.map(section => section.questions
      .filter(q => q.points)
      .map(q => q.points)).flat().length;

    const totalInitialAnswers = data.map(section => section.questions
      .filter(q => q.level === LEVELS.INITIAL && q.points)
      .map(q => q.points)).flat().length;

    const totalIntermediateAnswers = data.map(section => section.questions
      .filter(q => q.level === LEVELS.INTERMEDIATE && q.points)
      .map(q => q.points)).flat().length;

    const totalAdvancedAnswers = data.map(section => section.questions
      .filter(q => q.level === LEVELS.ADVANCED && q.points)
      .map(q => q.points)).flat().length;

    return {
      totalAnswers,
      totalInitialAnswers,
      totalIntermediateAnswers,
      totalAdvancedAnswers,
    };
  }

  getPoints(data, answers) {
    const totalPoints = data.map(section => (section.questions)
      .filter(q => q.points).map(q => q.points)).flat()

    const totalAverage = data.map(section => (section.questions)
      .filter(q => q.points).map(q => Number(q.points))).flat()
      .reduce((acc, val) => acc + val, 0) / answers.totalAnswers || 0;

    const totalInitialPoints = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.INITIAL && q.points).map(q => q.points)).flat()

    const totalInitialAverage = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.INITIAL && q.points).map(q => Number(q.points))).flat()
      .reduce((acc, val) => acc + val, 0) / answers.totalInitialAnswers || 0;

    const totalIntermediatePoints = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.INTERMEDIATE && q.points).map(q => q.points)).flat()

    const totalIntermediateAverage = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.INTERMEDIATE && q.points).map(q => Number(q.points))).flat()
      .reduce((acc, val) => acc + val, 0) / answers.totalIntermediateAnswers || 0;

    const totalAdvancedPoints = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.ADVANCED && q.points).map(q => q.points)).flat()

    const totalAdvancedAverage = data.map(section => (section.questions)
      .filter(q => q.level === LEVELS.ADVANCED && q.points).map(q => Number(q.points))).flat()
      .reduce((acc, val) => acc + val, 0) / answers.totalAdvancedAnswers || 0;

    return {
      totalPoints,
      totalAverage,
      totalInitialPoints,
      totalInitialAverage,
      totalIntermediatePoints,
      totalIntermediateAverage,
      totalAdvancedPoints,
      totalAdvancedAverage,
    }
  }

  buildResumeObject(points, questions, answers) {
    return [
      {
        questions: questions.totalQuestions,
        answers: answers.totalAnswers,
        label: LEVELS.ALL,
        percentage: Math.round((answers.totalAnswers/questions.totalQuestions) * 100),
        points: points.totalPoints,
        average: points.totalAverage.toString().substr(0, 4),
      },
      {
        questions: questions.totalInitialQuestions,
        answers: answers.totalInitialAnswers,
        label: LEVELS.INITIAL,
        percentage: Math.round((answers.totalInitialAnswers/questions.totalInitialQuestions) * 100),
        points: points.totalInitialPoints,
        average: points.totalInitialAverage.toString().substr(0, 4),
      },
      {
        questions: questions.totalIntermediateQuestions,
        answers: answers.totalIntermediateAnswers,
        label: LEVELS.INTERMEDIATE,
        percentage: Math.round((answers.totalIntermediateAnswers/questions.totalIntermediateQuestions) * 100),
        points: points.totalIntermediatePoints,
        average: points.totalIntermediateAverage.toString().substr(0, 4),
      },
      {
        questions: questions.totalAdvancedQuestions,
        answers: answers.totalAdvancedAnswers,
        label: LEVELS.ADVANCED,
        percentage: Math.round((answers.totalAdvancedAnswers/questions.totalAdvancedQuestions) * 100),
        points: points.totalAdvancedPoints,
        average: points.totalAdvancedAverage.toString().substr(0, 4),
      },
    ];
  }

  exportReport(candidate: ICandidate, indexedData: Object) {
    const techs = Object.keys(indexedData);
    let dynamicContent = [];

    const styles = this.getStyles();

    techs.forEach(tech => {
      const data = indexedData[tech].data;
      const comments = indexedData[tech].comments;
      const chart = this.state.canvasImage[tech];
      const resume = this.state.indexedResume[tech];

      const bodyTable = this.generateBodyTable(data);
      const resumeData = this.generateResumeData(tech, chart, comments, resume);

      dynamicContent = [
        ...dynamicContent,
        ...resumeData,
        {
          style: 'table',
          table: {
            widths: ['*', 100, 60],
            body: bodyTable,
          }
        }
      ];
    });

    const pdfDefinition: any = {
      info: {
        title: candidate.name,
      },
      content: [
        {
          columns: [
            {
              text: candidate.name.toUpperCase(),
              style: 'candidateName',
              width: 'auto',
            },
            {
              text: candidate.seniority.toUpperCase() + '\n\n',
              style: 'seniority',
              width: '*',
            },
          ],
        },
        ...dynamicContent,
      ],
      styles,
    };

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

  generateResumeData(tech, chart, comments, resume) {
    return [
      { text: tech.toUpperCase(), style: 'tech' },
      { image: chart, width: 500, margin: [0, 20] },
      {
        columns: [
          { text: 'All Questions: ' + resume[0].questions },
          { text: 'All Answers: ' + resume[0].answers + '\n\n' },
        ]
      },
      {
        columns: [
          { text: 'Initial: ' + resume[1].answers },
          { text: 'Intermediate: ' + resume[2].answers },
          { text: 'Advanced: ' + resume[3].answers},
        ],
      },
      {
        columns: [
          { text: 'Average: ' + resume[1].average },
          { text: 'Average: ' + resume[2].average },
          { text: 'Average: ' + resume[3].average + '\n\n\n'},
        ],
      },
      {
        columns: [
          { text: 'Comments: ' + comments + '\n\n\n'},
        ]
      },
    ]
  }

  generateBodyTable(data) {
    const rows = data.map(d => d.questions).map(questions => questions.filter(q => q.level)).flat();
    const initial = rows.filter(q => q.level === LEVELS.INITIAL).map(q => this.makeRow(q));
    const intermediate = rows.filter(q => q.level === LEVELS.INTERMEDIATE).map(q => this.makeRow(q));
    const advanced = rows.filter(q => q.level === LEVELS.ADVANCED).map(q => this.makeRow(q));

    const bodyTable = [
      [
        { text: 'Question', style: 'tableHeader'},
        { text: 'Level', style: 'tableHeader' },
        { text: 'Points', style: 'tableHeader' }
      ],
      ...initial,
      ...intermediate,
      ...advanced,
    ];

    return bodyTable;
  }

  getStyles() {
    return {
      candidateName: {
        bold: true,
        fontSize: 22,
        alignment: 'left',
      },
      seniority: {
        bold: true,
        fontSize: 22,
        color: 'green',
        alignment: 'right',
      },
      tech: {
        bold: true,
        fontSize: 16,
        color: 'blue',
      },
      table: {
        margin: [0, 5, 0, 15],
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        alignment: 'center',
      },
      defaultStyle: {
        fontSize: 15,
        bold: false,
      }
    }
  }

  makeRow(question) {
    return [
      {
        text: question.text,
      },
      {
        text: this.capitalize(question.level),
        alignment: 'center',
      },
      {
        text: question.points,
        alignment: 'center',
      },
    ]
  }

  capitalize(str) {
    return str.trim().replace(/^\w/, (c) => c.toUpperCase());
  }
}
