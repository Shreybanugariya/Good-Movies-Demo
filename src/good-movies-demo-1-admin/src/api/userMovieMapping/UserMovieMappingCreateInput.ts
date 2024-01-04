import { UserCreateNestedManyWithoutUserMovieMappingsInput } from "./UserCreateNestedManyWithoutUserMovieMappingsInput";

export type UserMovieMappingCreateInput = {
  movieId?: UserCreateNestedManyWithoutUserMovieMappingsInput;
  userId?: UserCreateNestedManyWithoutUserMovieMappingsInput;
};
