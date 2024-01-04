import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserVideoContentMappingResolverBase } from "./base/userVideoContentMapping.resolver.base";
import { UserVideoContentMapping } from "./base/UserVideoContentMapping";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserVideoContentMapping)
export class UserVideoContentMappingResolver extends UserVideoContentMappingResolverBase {
  constructor(
    protected readonly service: UserVideoContentMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
