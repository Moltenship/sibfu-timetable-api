import { Day } from '../enums/days';
import { TargetType } from '../enums/targetType';
import { Week } from '../enums/week';
import { Full } from '../types/full';
import { Class } from './class';
import { TimetableDate } from './timetableDate';

/** Represents timetable. */
export class Timetable {
  /** List of classes. */
  public readonly classes: Class[];

  /** Timetable target(group or teacher name). */
  public readonly target: string;

  /** Target type. */
  public readonly type: TargetType;

  /** Institute name. */
  public readonly institute: string;

  public constructor(data: Full<Timetable>) {
    this.classes = data.classes;
    this.target = data.target;
    this.type = data.type;
    this.institute = data.institute;
  }

  /**
   * Gets timetable for given date.
   * @param date Given date.
   */
  public getClassesByDate(date: Date): Class[] {
    return this.classes.filter(cls => cls.day === date.getDay() && cls.week === TimetableDate.getWeekStatus(date));
  }

  /**
   * Gets classes by week and day.
   * @param day Day to filter by.
   * @param week Week to filter by.
   */
  public getClassesByDayAndWeek(day: Day, week: Week): Class[] {
    return this.classes.filter(cls => cls.week === week && cls.day === day);
  }
}
