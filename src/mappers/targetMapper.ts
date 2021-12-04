import { TargetDto } from '../dtos/targetDto';

/** Target mapper. */
export class TargetMapper<TargetDto> {
  /** @inheritdoc */
  public fromDto(dto: TargetDto): string[] {
    return Object.keys(dto);
  }
}
