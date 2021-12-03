import { ClassDto } from './classDto';

export interface TimetableDto {
  readonly timetable: ClassDto[];
  readonly target: string;
  readonly type: string;
  readonly institute: string;
}
