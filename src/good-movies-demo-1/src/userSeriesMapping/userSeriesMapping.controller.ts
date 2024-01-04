import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserSeriesMappingService } from "./userSeriesMapping.service";
import { UserSeriesMappingControllerBase } from "./base/userSeriesMapping.controller.base";

@swagger.ApiTags("userSeriesMappings")
@common.Controller("userSeriesMappings")
export class UserSeriesMappingController extends UserSeriesMappingControllerBase {
  constructor(
    protected readonly service: UserSeriesMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
