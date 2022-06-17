export interface ICandidate {
  name: string,
  seniority: string,
  feedback: string,
}

export function makeCandidate(data: Partial<ICandidate>) {
  const defaultValue: ICandidate = {
    name: '',
    seniority: '',
    feedback: '',
  }

  return { ...defaultValue, ...data };
}