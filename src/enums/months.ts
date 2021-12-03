/** Represents months of the year. */
export enum Month {
  January = 0,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

/**
 * Represents months with correct grammar.
 *
 * Examples:
 * - `1 Февраля`
 * - `24 Марта`
 * - `31 Декабря`.
 */
export const DisplayMonths: Record<Month, string> = {
  [Month.January]: 'Января ☃️',
  [Month.February]: 'Февраля ❄️',
  [Month.March]: 'Марта 🥀',
  [Month.April]: 'Апреля 🌸',
  [Month.May]: 'Мая 🍖',
  [Month.June]: 'Июня 🌊',
  [Month.July]: 'Июля 🔥',
  [Month.August]: 'Августа 🏖️',
  [Month.September]: 'Сентября 🍂',
  [Month.October]: 'Октября 🎃',
  [Month.November]: 'Ноября 🌨️',
  [Month.December]: 'Декабря 🎅',
};
