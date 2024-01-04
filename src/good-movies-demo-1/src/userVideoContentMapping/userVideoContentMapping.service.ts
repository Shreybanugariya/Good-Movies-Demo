import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserVideoContentMappingServiceBase } from "./base/userVideoContentMapping.service.base";

@Injectable()
export class UserVideoContentMappingService extends UserVideoContentMappingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
