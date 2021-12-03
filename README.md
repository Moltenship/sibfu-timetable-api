# sibfu-timetable-api

[![npm version](https://badgen.net/npm/v/sibfu-timetable-api)](https://npm.im/sibfu-timetable-api)

## Features

- ⚡ Blazing fast
- 🔥 Full Typescript support
- 📘 Completely documented
- ⛰️ Built using `Domain-Driven-Development`

## Install

```bash
npm i sibfu-timetable-api
```

## Usage

```ts
import { fetchTimetable } from 'sibfu-timetable-api'

const timetable = await fetchTimetable('your-group-here');

console.log(timetable);
```
And that's it! 🤯

This library also provides helper class `TimetableDate` to interact with dates which is very helpful building timetable application.

```ts
import { TimetableDate } from 'sibfu-timetable-api';

const today = new Date();

const weekType = TimetableDate.getWeekStatus(today);

console.log(weekType) // 1 or 2 depending on your current date which is enum `Week`
```

## Huge thanks 👋
To my friend [choi-moeta](https://github.com/choi-moeta) for inspiring me and helping with creating and publishing this library. 💗

## License

MIT &copy; [Moltenship](https://github.com/Moltenship)
