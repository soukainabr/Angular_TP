export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?:Major;
  archived:boolean;
}
export enum Major {
  Medicine = 'Medicine',
  ComputerScience = 'Computer Science',
}