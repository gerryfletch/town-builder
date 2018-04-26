export interface Task {
  icon: string,
  transcript: string,
  plans: string,
  inventory: any,
  hints: string[],
  resources: Resource[]
}

export interface Resource {
  name: string,
  link: string,
  description: string
}
