import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";
import { VideoContentWhereUniqueInput } from "../videoContent/VideoContentWhereUniqueInput";

export type GenreUpdateInput = {
  decription?: string;
  movie?: MovieWhereUniqueInput | null;
  Name?: string;
  series?: SeriesWhereUniqueInput | null;
  videoContent?: VideoContentWhereUniqueInput | null;
};
