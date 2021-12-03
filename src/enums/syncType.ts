/** Represents class sync type. */
export enum SyncType {
  Sync = 'синхронно',
  Async = 'асинхронно',
}

/** Colors object for each sync type. */
export const SyncTypeColors = {
  [SyncType.Sync]: 'orange',
  [SyncType.Async]: 'teal',
};
