import axios from 'axios';

const BASE_URL = 'http://edu.sfu-kras.ru/api/timetable/';

/**
 * Module for interaction with autocomplete api.
 */
export const autocompleteModule = axios.create({
  baseURL: `${BASE_URL}autocomplete_new/`,
});

/**
 * Module for interaction with timetable api.
 */
export const timetableModule = axios.create({
  baseURL: BASE_URL,
});
