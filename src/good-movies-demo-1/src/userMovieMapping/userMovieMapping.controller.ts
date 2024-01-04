import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserMovieMappingService } from "./userMovieMapping.service";
import { UserMovieMappingControllerBase } from "./base/userMovieMapping.controller.base";

@swagger.ApiTags("userMovieMappings")
@common.Controller("userMovieMappings")
export class UserMovieMappingController extends UserMovieMappingControllerBase {
  constructor(
    protected readonly service: UserMovieMappingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
