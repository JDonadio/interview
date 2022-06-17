export interface IQuestionSection {
  title: string,
  questions: IQuestion[],
}

export interface IQuestion {
  level: string,
  text: string,
  criteria?: string,
  points?: number,
}

export function makeQuestionSection(data: Partial<IQuestionSection>) {
  const defaultValue: IQuestionSection = {
    title: '',
    questions: [],
  }

  return { ...defaultValue, ...data };
}

export function makeQuestion(data: Partial<IQuestion>) {
  const defaultValue: IQuestion = {
    level: '',
    text: '',
    criteria: null,
    points: 0,
  }

  return { ...defaultValue, ...data };
}