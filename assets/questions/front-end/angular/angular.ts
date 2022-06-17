import { IQuestionSection } from "src/app/models/questions";

export const AngularQuestions: IQuestionSection[] = [
  {
    title: 'Version',
    questions: [
      {
        level: null,
        criteria: null,
        text: 'En tu actual proyecto: que versión utilizas y cual es tu rol actual ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Sabes que es Ivy ?',
      },
    ]
  },
  {
    title: 'Lazy loading',
    questions: [
      {
        level: 'initial',
        criteria: 'optional',
        text: 'Podrías describir el concepto de Lazy Loading ?',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Dónde y cómo se configura ?',
      },
    ]
  },
  {
    title: 'Components',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Que es un componente ?',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Diferencia entre Componente y Directiva',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Cómo se comunican los Componentes ?',
      },
    ]
  },
  {
    title: 'Pipes',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Que son los pipes y para que se utilizan ?',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Hiciste Pipes custom ?',
      },
      {
        level: 'intermediate',
        criteria: 'optional',
        text: 'Diferencia entre Pipe PURO e IMPURO ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Para que sirve en Pipe Async ?',
      },
    ]
  },
  {
    title: 'State Management',
    questions: [
      {
        level: 'intermediate',
        criteria: null,
        text: 'Si tengo un formulario con información cargada y refresco la vista, cómo persistirías los datos ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Utilizaste servicios como NGXS o NgRx ? Si es así, conceptual mente cómo funcionan las responsabilidades ?',
      },
    ]
  },
  {
    title: 'Observable',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Podrías describir con tus palabras lo que entendes por Observable ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Cuándo y para que lo utilizarías ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Podrías describir que es un BehaviorSubject ? (Puede haberlo mencionado en la sección de State Management)',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Sabrías la diferencia entre BehaviorSubject y Subject ? (Puede haberlo mencionado en la sección de State Management)',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Sabrías describir la diferencia entre un Observable y una Promise ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Si necesito hacer un HTTP Request, me conviene utilizar Observables o Promises ?',
      },
    ]
  },
  {
    title: 'Change Detection Strategy',
    questions: [
      {
        level: 'intermediate',
        criteria: null,
        text: 'Conoces el concepto de Estrategia de Detección de Cambios ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Cuántas estrategias conoces y cómo funcionan ?',
      },
    ]
  },
  {
    title: 'View Encapsulation',
    questions: [
      {
        level: 'intermediate',
        criteria: null,
        text: 'Conoces el concepto de Encapsulación de Vista ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Cuántos tipos hay y que diferencias tienen ?',
      },
    ]
  },
  {
    title: 'Forms',
    questions: [
      {
        level: 'intermediate',
        criteria: null,
        text: 'Conoces las estrategias que existen en angular para el manejo de formularios y cuál es la diferencia entre ellas ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Utilizaste validaciones custom y dinámicas ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Que paso extra hay que hacer cuando cambias dinámicamente la validación de un control ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Hiciste uso de la interfaz ControlValueAccessor ? Para que ?',
      },
    ]
  },
  {
    title: 'Performance',
    questions: [
      {
        level: 'intermediate',
        criteria: 'optional',
        text: 'Para que sirve la instrucción trackBy del *ngFor ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Explica con tus palabras que es el tree-shaking y como funciona ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Conoces la diferencia entre la compilación JIT y la AOT ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Sabes que es y lo que hace ngcc ?',
      },
    ]
  },
  {
    title: 'Routing',
    questions: [
      {
        level: 'intermediate',
        criteria: 'optional',
        text: 'Como haces para securizar una ruta?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Como estructurarias un enrutamiento que tiene Tabs ?',
      },
    ]
  },
  {
    title: 'Resolvers',
    questions: [
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Para que sirve y como funcionan los resolvers ?',
      },
    ]
  },
  {
    title: 'PWA',
    questions: [
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Que son las PWA, has trabajado con ellas ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Qué son service workers, los has utilizado ?',
      },
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Cuando considerarías utilizar una PWA ?',
      },
    ]
  },
]
