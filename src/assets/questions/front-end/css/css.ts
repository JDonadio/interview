import { IQuestionSection } from "src/app/models/questions";

export const CssQuestions: IQuestionSection[] = [
  {
    title: 'Positioning',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Si a un elemento le cambio su posición a absolute, es absoluta respecto a que elemento ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Conoces flexbox y que reglas define para su uso ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Sabrías que diferencias tiene flexbox con grid layout ?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'A que es relativo la posición "fixed" ?',
      },
    ]
  },
  {
    title: 'Identificators & Specificity',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Que tipo de selectores conoces ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Que son los pseudo-classes y los pseudo-elements y para que sirven ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Si tengo un elemento <p> definido como...',
      },
    ]
  },
  {
    title: 'Development / Organization Methodologies',
    questions: [
      {
        level: 'initial',
        criteria: null,
        text: 'Si te menciono BEM, OOCSS y SMACSS: sabrías decirme a que hacen referencia ?',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Podrías decirme que ventajas tengo al usar un preprocesador de CSS ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Si utilizas uno de estos, cuál elegis y por qué ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Sabrías definir un mixin y dar un ejemplo de uso ?',
      },
    ]
  },
  {
    title: 'Responsive',
    questions: [
      {
        level: 'advanced',
        criteria: 'optional',
        text: 'Si tengo una aplicación que debería adaptarse a diferentes tamaños de dispositivos, que se te ocurre que podrías implementar para este escenario ?',
      },
    ]
  },
  {
    title: 'General',
    questions: [
      {
        level: 'intermediate',
        criteria: null,
        text: 'Que unidades de medida, ademas los px, existen ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Tienen efecto el margin-top o el margin-bottom en los elementos en línea ?',
      },
      {
        level: 'intermediate',
        criteria: null,
        text: 'Para que sirve la propiedad z-index ?',
      },
      {
        level: 'initial',
        criteria: null,
        text: 'Que diferencia hay entre display:none y visibility:hidden?',
      },
      {
        level: 'advanced',
        criteria: null,
        text: 'Que son y que ventajas tienen las variables de css ?',
      },
    ]
  },
]
