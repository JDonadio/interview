type CharType = 'bar' | 'line' | 'polarArea';

export interface IChartOpts {
  ctx: any,
  type: CharType,
  labels: string[],
  data: any,
  id: string
}

export function makeChartOpts(data: Partial<IChartOpts>) {
  const defaultValue: IChartOpts = {
    ctx: null,
    type: 'bar',
    labels: [],
    data: [],
    id: ''
  }

  return { ...defaultValue, ...data };
}