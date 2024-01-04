import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoContentService } from "./videoContent.service";
import { VideoContentControllerBase } from "./base/videoContent.controller.base";

@swagger.ApiTags("videoContents")
@common.Controller("videoContents")
export class VideoContentController extends VideoContentControllerBase {
  constructor(protected readonly service: VideoContentService) {
    super(service);
  }
}
