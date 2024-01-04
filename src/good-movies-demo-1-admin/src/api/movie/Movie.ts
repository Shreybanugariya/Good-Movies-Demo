import { Genre } from "../genre/Genre";

export type Movie = {
  createdAt: Date;
  description: string;
  Director: string;
  genre?: Array<Genre>;
  id: string;
  mustWatchCount: number | null;
  name: string;
  updatedAt: Date;
};
