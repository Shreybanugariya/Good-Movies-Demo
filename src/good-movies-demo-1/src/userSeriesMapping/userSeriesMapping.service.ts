import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSeriesMappingServiceBase } from "./base/userSeriesMapping.service.base";

@Injectable()
export class UserSeriesMappingService extends UserSeriesMappingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
