import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VideoContentService } from "./videoContent.service";
import { VideoContentControllerBase } from "./base/videoContent.controller.base";

@swagger.ApiTags("videoContents")
@common.Controller("videoContents")
export class VideoContentController extends VideoContentControllerBase {
  constructor(
    protected readonly service: VideoContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
