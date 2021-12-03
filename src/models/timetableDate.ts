import { DateTime } from 'luxon';
import { Week } from '../enums/week';

/** Wrapper for date functions. */
export class TimetableDate {
  /**
   * Calculates whether week is odd or even.
   * @param date Given date.
   */
  public static getWeekStatus(date: Date): Week {
    return DateTime
      .fromJSDate(date)
      .weekNumber % 2 === 0 ?
      Week.Even :
      Week.Odd;
  }

  /**
   * Adds days to given date.
   * @param date Given date.
   * @param days Days to add.
   */
  public static addDays(date: Date, days: number): Date {
    return DateTime
      .fromJSDate(date)
      .plus({ days })
      .toJSDate();
  }

  /**
   * Subtracts days from given date.
   * @param date Given date.
   * @param days Days to subtract.
   */
  public static subtractDays(date: Date, days: number): Date {
    return DateTime
      .fromJSDate(date)
      .minus({ days })
      .toJSDate();
  }

  /**
   * Gets start of week by given date.
   * @param date Given date.
   */
  public static getStartOfWeek(date: Date): Date {
    return DateTime
      .fromJSDate(date)
      .startOf('week')
      .toJSDate();
  }
}
