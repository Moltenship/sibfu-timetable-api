import { TargetType } from '../enums/targetType';
import { TimetableDto } from '../dtos/timetableDto';
import { Timetable } from '../models/timetable';
import { IMapper } from './mapper';
import { ClassMapper } from './classMapper';

/** Timetable mapper. */
export class TimetableMapper implements IMapper<TimetableDto, Timetable> {
  /** @inheritdoc */
  public fromDto(dto: TimetableDto): Timetable {
    const classMapper = new ClassMapper();

    return new Timetable({
      classes: dto.timetable.map(classDto => classMapper.fromDto(classDto)),
      institute: dto.institute,
      target: dto.target,
      type: dto.type as TargetType,
    });
  }
}
