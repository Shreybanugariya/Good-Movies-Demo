import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserMovieMappingResolverBase } from "./base/userMovieMapping.resolver.base";
import { UserMovieMapping } from "./base/UserMovieMapping";
import { UserMovieMappingService } from "./userMovieMapping.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserMovieMapping)
export class UserMovieMappingResolver extends UserMovieMappingResolverBase {
  constructor(
    protected readonly service: UserMovieMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
