import { Module } from "@nestjs/common";
import { VideoContentModuleBase } from "./base/videoContent.module.base";
import { VideoContentService } from "./videoContent.service";
import { VideoContentController } from "./videoContent.controller";
import { VideoContentResolver } from "./videoContent.resolver";

@Module({
  imports: [VideoContentModuleBase],
  controllers: [VideoContentController],
  providers: [VideoContentService, VideoContentResolver],
  exports: [VideoContentService],
})
export class VideoContentModule {}
