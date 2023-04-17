import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Marseille',
    description: '',
    date: dateToday,
    student: 'Paul',
    major:Major.Medicine,
    archived:false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major:Major.ComputerScience,
    archived:false
  },
];
