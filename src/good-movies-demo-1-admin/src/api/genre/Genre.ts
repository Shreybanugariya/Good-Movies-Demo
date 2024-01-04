import { Movie } from "../movie/Movie";
import { Series } from "../series/Series";
import { VideoContent } from "../videoContent/VideoContent";

export type Genre = {
  createdAt: Date;
  decription: string;
  id: string;
  movie?: Movie | null;
  Name: string;
  series?: Series | null;
  updatedAt: Date;
  videoContent?: VideoContent | null;
};
