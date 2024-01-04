import { VideoContent as TVideoContent } from "../api/videoContent/VideoContent";

export const VIDEOCONTENT_TITLE_FIELD = "name";

export const VideoContentTitle = (record: TVideoContent): string => {
  return record.name?.toString() || String(record.id);
};
