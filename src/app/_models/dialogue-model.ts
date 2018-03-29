export interface Dialogue {
  author: string,
  text: string,
}

export interface Input {
  placeholder: string,
}

export interface DialogueScene {
  dialogue: Dialogue,
  input: Input
}
