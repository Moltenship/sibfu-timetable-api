/** Base mapper interface. */
export interface IMapper<TDto, TDomain> {

  /**
   * Gets model from dto.
   * @param dto Data transfer object.
   */
  fromDto(dto: TDto): TDomain;
}
