import { StringFilter } from "../../util/StringFilter";
import { MovieWhereUniqueInput } from "../movie/MovieWhereUniqueInput";
import { SeriesWhereUniqueInput } from "../series/SeriesWhereUniqueInput";
import { VideoContentWhereUniqueInput } from "../videoContent/VideoContentWhereUniqueInput";

export type GenreWhereInput = {
  decription?: StringFilter;
  id?: StringFilter;
  movie?: MovieWhereUniqueInput;
  Name?: StringFilter;
  series?: SeriesWhereUniqueInput;
  videoContent?: VideoContentWhereUniqueInput;
};
