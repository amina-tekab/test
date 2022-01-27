import { Live as TLive } from "../api/live/Live";

export const LIVE_TITLE_FIELD = "name";

export const LiveTitle = (record: TLive): string => {
  return record.name || record.id;
};
