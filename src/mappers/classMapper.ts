import { Class } from '../models/class';
import { ClassType } from '../enums/classType';
import { SyncType } from '../enums/syncType';
import { ClassDto } from '../dtos/classDto';
import { IMapper } from './mapper';

/** Class mapper. */
export class ClassMapper implements IMapper<ClassDto, Class> {
  /** @inheritdoc */
  public fromDto(dto: ClassDto): Class {
    return new Class({
      building: dto.building,
      day: Number(dto.day),
      place: dto.place,
      room: dto.room,
      subject: dto.subject,
      sync: dto.sync as SyncType,
      teacher: dto.teacher,
      time: dto.time,
      type: dto.type as ClassType,
      week: Number(dto.week),
    });
  }
}
