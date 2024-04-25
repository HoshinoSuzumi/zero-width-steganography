export type ZWSCharSet = string[];

export interface ZWSDecoded<T> {
  original: string;
  hidden: T;
}

export interface ZWSCharacter {
  label: string;
  character: string;
}
