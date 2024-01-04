import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserMovieMappingService } from "./userMovieMapping.service";
import { UserMovieMappingControllerBase } from "./base/userMovieMapping.controller.base";

@swagger.ApiTags("userMovieMappings")
@common.Controller("userMovieMappings")
export class UserMovieMappingController extends UserMovieMappingControllerBase {
  constructor(protected readonly service: UserMovieMappingService) {
    super(service);
  }
}
