import { TargetMapper } from '../mappers/targetMapper';
import { autocompleteModule } from '../api';

/**
 * Fetches autocompleted results for given target string.
 *
 * All data in returns with this type:
 * `{'КИ18-16б': 'КИ18-16б', 'КИ18-17б': 'КИ18-17б'}`.
 *
 * Data inside this object sorted from best result to worst.
 *
 * All keys are equals to object values.
 * @param target Target to get autocomplete results.
 * @returns Array of targets from best results to worst.
 */
export const fetchTargets = async(target: string): Promise<string[]> => {
  const { data } = await autocompleteModule.get(target);
  const targetMapper = new TargetMapper();
  return targetMapper.fromDto(data);
};
