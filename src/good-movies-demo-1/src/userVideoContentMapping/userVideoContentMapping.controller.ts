import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";
import { UserVideoContentMappingControllerBase } from "./base/userVideoContentMapping.controller.base";

@swagger.ApiTags("userVideoContentMappings")
@common.Controller("userVideoContentMappings")
export class UserVideoContentMappingController extends UserVideoContentMappingControllerBase {
  constructor(
    protected readonly service: UserVideoContentMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
