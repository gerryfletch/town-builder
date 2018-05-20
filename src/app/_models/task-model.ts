export interface Task {
  id: number,
  icon: string,
  transcript: string,
  plans: string,
  inventory: Inventory[],
  hints: string[],
  resources: Resource[]
}

export interface Resource {
  name: string,
  link: string,
  description: string
}

export interface Inventory {
  name: string,
  img: string,
  tag: string,
  description: string
}
