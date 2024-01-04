import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";
import { VideoContentWhereUniqueInput } from "../videoContent/VideoContentWhereUniqueInput";

export type GenreCreateInput = {
  decription: string;
  movie?: MovieWhereUniqueInput | null;
  Name: string;
  series?: SeriesWhereUniqueInput | null;
  videoContent?: VideoContentWhereUniqueInput | null;
};
