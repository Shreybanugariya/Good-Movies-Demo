import { User } from "../user/User";

export type UserMovieMapping = {
  createdAt: Date;
  id: string;
  movieId?: Array<User>;
  updatedAt: Date;
  userId?: Array<User>;
};
