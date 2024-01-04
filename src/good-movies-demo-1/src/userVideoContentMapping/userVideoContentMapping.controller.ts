import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserVideoContentMappingService } from "./userVideoContentMapping.service";
import { UserVideoContentMappingControllerBase } from "./base/userVideoContentMapping.controller.base";

@swagger.ApiTags("userVideoContentMappings")
@common.Controller("userVideoContentMappings")
export class UserVideoContentMappingController extends UserVideoContentMappingControllerBase {
  constructor(protected readonly service: UserVideoContentMappingService) {
    super(service);
  }
}
