import * as graphql from "@nestjs/graphql";
import { UserMovieMappingResolverBase } from "./base/userMovieMapping.resolver.base";
import { UserMovieMapping } from "./base/UserMovieMapping";
import { UserMovieMappingService } from "./userMovieMapping.service";

@graphql.Resolver(() => UserMovieMapping)
export class UserMovieMappingResolver extends UserMovieMappingResolverBase {
  constructor(protected readonly service: UserMovieMappingService) {
    super(service);
  }
}
