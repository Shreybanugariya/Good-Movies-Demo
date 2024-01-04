import * as graphql from "@nestjs/graphql";
import { UserSeriesMappingResolverBase } from "./base/userSeriesMapping.resolver.base";
import { UserSeriesMapping } from "./base/UserSeriesMapping";
import { UserSeriesMappingService } from "./userSeriesMapping.service";

@graphql.Resolver(() => UserSeriesMapping)
export class UserSeriesMappingResolver extends UserSeriesMappingResolverBase {
  constructor(protected readonly service: UserSeriesMappingService) {
    super(service);
  }
}
