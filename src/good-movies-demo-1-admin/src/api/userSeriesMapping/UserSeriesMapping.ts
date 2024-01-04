import { User } from "../user/User";
import { Series } from "../series/Series";

export type UserSeriesMapping = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: Array<User>;
  webSeriesId?: Array<Series>;
};
