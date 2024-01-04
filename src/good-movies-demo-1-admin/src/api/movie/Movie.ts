import { User } from "../user/User";
import { Genre } from "../genre/Genre";

export type Movie = {
  createdAt: Date;
  description: string;
  Director?: User;
  genre?: Array<Genre>;
  id: string;
  mustWatchCount: number | null;
  name: string;
  updatedAt: Date;
};
