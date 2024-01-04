import * as graphql from "@nestjs/graphql";
import { VideoContentResolverBase } from "./base/videoContent.resolver.base";
import { VideoContent } from "./base/VideoContent";
import { VideoContentService } from "./videoContent.service";

@graphql.Resolver(() => VideoContent)
export class VideoContentResolver extends VideoContentResolverBase {
  constructor(protected readonly service: VideoContentService) {
    super(service);
  }
}
