import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoContentServiceBase } from "./base/videoContent.service.base";

@Injectable()
export class VideoContentService extends VideoContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
