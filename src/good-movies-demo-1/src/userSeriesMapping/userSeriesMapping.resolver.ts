import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserSeriesMappingResolverBase } from "./base/userSeriesMapping.resolver.base";
import { UserSeriesMapping } from "./base/UserSeriesMapping";
import { UserSeriesMappingService } from "./userSeriesMapping.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserSeriesMapping)
export class UserSeriesMappingResolver extends UserSeriesMappingResolverBase {
  constructor(
    protected readonly service: UserSeriesMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
