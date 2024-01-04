import * as graphql from "@nestjs/graphql";
import { UserVideoContentMappingResolverBase } from "./base/userVideoContentMapping.resolver.base";
import { UserVideoContentMapping } from "./base/UserVideoContentMapping";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";

@graphql.Resolver(() => UserVideoContentMapping)
export class UserVideoContentMappingResolver extends UserVideoContentMappingResolverBase {
  constructor(protected readonly service: UserVideoContentMappingService) {
    super(service);
  }
}
