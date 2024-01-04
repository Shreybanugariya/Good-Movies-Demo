import { User } from "../user/User";
import { Genre } from "../genre/Genre";
import { Decimal } from "decimal.js";
import { UserSeriesMapping } from "../userSeriesMapping/UserSeriesMapping";

export type Series = {
  createdAt: Date;
  descption: string;
  director?: User;
  genre?: Array<Genre>;
  id: string;
  mustWatchCount: number;
  name: string;
  rating: Decimal;
  updatedAt: Date;
  userSeriesMapping?: UserSeriesMapping | null;
};
