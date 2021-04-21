export interface BiTrans {
  en: string;
  ja: string;
}

export interface Idiom {
  idiom: BiTrans;
  note: string;
  phrases: BiTrans[];
}

export type Lesson = Idiom[];
