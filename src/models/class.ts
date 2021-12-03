import { Day } from '../enums/days';
import { Week } from '../enums/week';
import { ClassType } from '../enums/classType';
import { SyncType } from '../enums/syncType';
import { Full } from '../types/full';

/** Represents class. */
export class Class {
  /** Day of week. */
  public readonly day: Day;

  /** Week of the class.  */
  public readonly week: Week;

  /** Class time range. */
  public readonly time: string;

  /** Class subject. */
  public readonly subject: string;

  /** Class type. */
  public readonly type: ClassType;

  /** Class teacher. */
  public readonly teacher: string;

  /** Where the class is taking place. */
  public readonly place: string;

  /** Building where the class is taking place. */
  public readonly building: string;

  /** Audience where class is taking place. */
  public readonly room: string;

  /** Is class sync or async. */
  public readonly sync: SyncType;

  public constructor(data: Full<Class>) {
    this.day = data.day;
    this.week = data.week;
    this.time = data.time;
    this.subject = data.subject;
    this.type = data.type;
    this.teacher = data.teacher;
    this.place = data.place;
    this.building = data.building;
    this.room = data.room;
    this.sync = data.sync;
  }
}
