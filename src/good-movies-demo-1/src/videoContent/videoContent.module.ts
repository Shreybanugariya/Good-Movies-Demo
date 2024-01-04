import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoContentModuleBase } from "./base/videoContent.module.base";
import { VideoContentService } from "./videoContent.service";
import { VideoContentController } from "./videoContent.controller";
import { VideoContentResolver } from "./videoContent.resolver";

@Module({
  imports: [VideoContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoContentController],
  providers: [VideoContentService, VideoContentResolver],
  exports: [VideoContentService],
})
export class VideoContentModule {}
