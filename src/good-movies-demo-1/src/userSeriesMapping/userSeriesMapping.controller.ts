import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSeriesMappingService } from "./userSeriesMapping.service";
import { UserSeriesMappingControllerBase } from "./base/userSeriesMapping.controller.base";

@swagger.ApiTags("userSeriesMappings")
@common.Controller("userSeriesMappings")
export class UserSeriesMappingController extends UserSeriesMappingControllerBase {
  constructor(protected readonly service: UserSeriesMappingService) {
    super(service);
  }
}
