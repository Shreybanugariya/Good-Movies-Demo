import { Genre } from "../genre/Genre";
import { Decimal } from "decimal.js";
import { UserVideoContentMapping } from "../userVideoContentMapping/UserVideoContentMapping";

export type VideoContent = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice?: Array<Genre>;
  mustWatchCount: number | null;
  name: string | null;
  rating: Decimal | null;
  updatedAt: Date;
  userVideoContentMapping?: UserVideoContentMapping | null;
  videoContentMapping?: UserVideoContentMapping | null;
};
