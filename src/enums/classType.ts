/** Represents class type(eg. Lect, lab or practice). */
export enum ClassType {
  Lab = 'лаб. работа',
  Practice = 'пр. занятие',
  Lecture = 'лекция',
}

/** Object with colors for each class type. */
export const ClassTypeColors: Record<ClassType, string> = {
  [ClassType.Lab]: 'purple',
  [ClassType.Lecture]: 'blue',
  [ClassType.Practice]: 'green',
};
